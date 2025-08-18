from typing import Optional
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from .models import Category
from .schemas import CategorySchema
from .database import get_db

router = APIRouter()


@router.post("/categories/{category_id}/set-parent")
def set_parent_category(
    category_id: int,
    parent_id: Optional[str] = Query(
        None, description="ID of the new parent category; empty to remove parent"
    ),
    db: Session = Depends(get_db)
):
    # Normalize empty string to None
    if parent_id == "":
        parent_id_int = None
    else:
        try:
            parent_id_int = int(parent_id) if parent_id is not None else None
        except ValueError:
            raise HTTPException(
                status_code=422, detail="parent_id must be an integer or empty")

    category = db.query(Category).filter(Category.id == category_id).first()
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")

    if parent_id_int == category_id:
        raise HTTPException(
            status_code=400, detail="A category cannot be its own parent.")

    if parent_id_int is not None:
        parent_category = db.query(Category).filter(
            Category.id == parent_id_int).first()
        if not parent_category:
            raise HTTPException(
                status_code=404, detail="Parent category not found")
        category.parent_id = parent_id_int
        message = f"Parent category set to {parent_category.name} for {category.name}"
    else:
        category.parent_id = None
        message = f"Parent category removed for {category.name}"

    db.commit()
    db.refresh(category)
    return {"message": message}


@router.get("/categories", response_model=list[CategorySchema])
def read_categories(db: Session = Depends(get_db)):
    categories = db.query(Category).all()
    result = []
    for cat in categories:
        parent_name = cat.parent.name if cat.parent else None
        result.append(
            CategorySchema(
                id=cat.id,
                name=cat.name,
                description=cat.description,
                parent_name=parent_name
            )
        )
    return result

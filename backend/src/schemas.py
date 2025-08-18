from pydantic import BaseModel


class CategorySchema(BaseModel):
    id: int
    name: str
    description: str | None = None
    parent_name: str | None = None

    class Config:
        from_attributes = True

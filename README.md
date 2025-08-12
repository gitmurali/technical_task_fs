#  Full Stack Developer Technical Task

## CONGRATULATIONS! 
## You've reached the next stage, which is solving a Sliide practical test
________________________________________________________________________
## Overview

You are tasked with building an internal tool (without external stakeholders or customers) for managing hierarchical categories. Digital content that we provide to the user gets tagged with these categories. This enables us to provide personalised content which matches a user's interests.
We have provided you with a database to get you started, and we would like you to build the API and UI pieces to complete the tool.

### Understanding the categories logic

Our categories relate to each other in a way that allows a Parent category like `Sport` to have more specific child categories such as `Football`. This can granulate further in that this may also have a child category of `World Cup`, which is even more specific.

For Example:
Bottom up:
`World Cup -> Football -> Sport`

Top Down:
`Sport -> Football -> World Cup`

Another good reference is Google's content categories. [See here.](https://cloud.google.com/natural-language/docs/categories#categories_version_2)

## Task Requirements

The technology stack choice is entirely up to you. We have offered some suggestions and tips in the below sections and this is all that they are :)

### Core Functionality
We'd like you to build a full-stack application which allows users to:
1. **View the categories**
2. **Modify category relationships** by changing the parent -> child linkages between categories

### Technical Constraints
- Use any frontend and backend technologies that you're comfortable with. Make sure to include the setup instructions for us to review your solution in a README file.

## AI Tool Usage

We **encourage** you to use AI tools (ChatGPT, Claude, Copilot, etc.) to complete this task. However, you **MUST understand** the code you submit

## Getting Started

### Database Structure
We've provided a PostgreSQL database with a `categories` table containing:
- `id` (SERIAL INTEGER, PRIMARY KEY)
- `name` (VARCHAR, UNIQUE)
- `description` (TEXT)
- `parent_id` (INTEGER, NULLABLE, foreign key referencing categories.id)

### Database Setup
1. Ensure Docker and Docker Compose are installed:
    - [Install Docker Desktop](https://docs.docker.com/get-docker/) (includes Docker Compose)
    - Or install separately: [Docker](https://docs.docker.com/engine/install/) + [Docker Compose](https://docs.docker.com/compose/install/)
2. Run `docker-compose up -d` to start the PostgreSQL database
3. The database will be available at `localhost:5432`
    - Database: `categories_db`
    - Username: `developer`
    - Password: `devpassword`

The database comes pre-populated with sample hierarchical data.

### Exploring the Database
You can explore the categories table using psql:

```bash
# View all categories
docker exec categories_postgres psql -U developer -d categories_db -c "SELECT * FROM categories ORDER BY id;"

# Interactive psql session (use -it flags for interactive mode)
docker exec -it categories_postgres psql -U developer -d categories_db
```

## Submission Requirements

### Code Delivery
- **DO NOT** push your solution to our public GitHub repository
- Feel free to create either your own repository as a fork or **ZIP** your entire project directory and **EMAIL** the file to our recruiter

### Documentation Requirements
Your submission must include:

1. A **README.md** file with:
    - Clear setup instructions (assume we have a clean machine)
        - Provide **complete setup instructions** - don't assume we have your tools installed
        - Try to make your setup as easy to use as possible (Docker, one-command setup, etc.)
        - Include any dependencies, environment variables, or configuration needed
    - Details of how to run the application
    - Your technology choices and reasoning. This can also include assumptions which you have made

2. If you have decided to use AI, a **AI_USAGE.md** file with:
    - The key prompts which you used
    - Notes on how you guided the AI
    - Details of how you validated the AI code

3. **OPTIONAL -** If time permits, we'd love to hear what tools you think would be best for an internal tool like this. Feel free to create a markdown file with this information if you would like to.

## Expectation

Focus on creating a working solution rather than a perfect one. The UI does not have to be aesthetically pleasing, it can be functional (we all know that less better code > loads of worse code). 

## Questions?

If you have any clarifications about this task and its requirements then please do get in touch with us via our recruiter

## Next Steps
Once we have received your task along with any other documentation which you feel is necessary for your submission, we will review it. 

If we like what we see, we'll invite you to join us on a call for a discussion where we’ll ask you to go through your task, explaining any decisions that you've made.

## Good luck!
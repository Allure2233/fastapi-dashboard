from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..models.user import User
from ..models.db import get_db
from ..utils.security import get_current_active_user, get_password_hash

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/")
def get_users(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    users = db.query(User).offset(skip).limit(limit).all()
    return [{"id": u.id, "username": u.username, "email": u.email, "full_name": u.full_name, "role": u.role} for u in users]

@router.get("/{user_id}")
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"id": user.id, "username": user.username, "email": user.email, "full_name": user.full_name, "role": user.role}

@router.put("/me")
def update_user_me(
    full_name: str = None,
    email: str = None,
    password: str = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    if email:
        existing_email = db.query(User).filter(User.email == email).first()
        if existing_email and existing_email.id != current_user.id:
            raise HTTPException(status_code=400, detail="Email already registered")
        current_user.email = email
    if full_name:
        current_user.full_name = full_name
    if password:
        current_user.hashed_password = get_password_hash(password)
    db.commit()
    db.refresh(current_user)
    return {"message": "Profile updated successfully"}

@router.delete("/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(user)
    db.commit()
    return {"message": "User deleted successfully"}
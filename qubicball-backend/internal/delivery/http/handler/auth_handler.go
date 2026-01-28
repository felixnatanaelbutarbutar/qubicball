package handler

import (
	"net/http"

	"qubicball-backend/internal/domain"

	"github.com/gin-gonic/gin"
)

type AuthHandler struct {
	UserUsecase domain.UserUsecase
}

func (h *AuthHandler) Register(c *gin.Context) {
	var req struct {
		Name     string      `json:"name"`
		Email    string      `json:"email"`
		Password string      `json:"password"`
		Role     domain.Role `json:"role"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Default role to member if not provided
	if req.Role == "" {
		req.Role = domain.RoleMember
	}

	user := domain.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: req.Password,
		Role:     req.Role,
	}

	if err := h.UserUsecase.Register(c.Request.Context(), &user); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}

func (h *AuthHandler) Login(c *gin.Context) {
	var request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

<<<<<<< HEAD
	token, err := h.UserUsecase.Login(c.Request.Context(), request.Email, request.Password)
=======
	user, token, err := h.UserUsecase.Login(c.Request.Context(), request.Email, request.Password)
>>>>>>> upstream/main
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

<<<<<<< HEAD
	c.JSON(http.StatusOK, gin.H{"token": token})
=======
	c.JSON(http.StatusOK, gin.H{
		"token": token,
		"user":  user,
	})
>>>>>>> upstream/main
}

func (h *AuthHandler) GetProfile(c *gin.Context) {
	userID := c.GetUint("user_id")
	user, err := h.UserUsecase.GetProfile(c.Request.Context(), userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}
func (h *AuthHandler) GetAll(c *gin.Context) {
	users, err := h.UserUsecase.GetAllUsers(c.Request.Context())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, users)
}

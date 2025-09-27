package users

import (
	"net/http"

	"github.com/judgenot0/judge-backend/middlewares"
)

func (h *Handler) RegisterRoutes(mux *http.ServeMux, manager *middlewares.Manager, middlewares *middlewares.Middlewares) {
	mux.Handle("POST /api/user/login", manager.With(h.Login))
	mux.Handle("POST /api/user/register", manager.With(h.CreateUser))
	mux.Handle("POST /api/user/logout", manager.With(h.Logout))
	//TODO: More Routes to go
}

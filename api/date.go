package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime = time.Parse("2024-05-04")
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime = time.Date(2024, time.Month(5), 4, 18, 30, 0, 0, time.UTC)
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
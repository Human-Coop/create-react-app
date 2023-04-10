package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	// weddingTime := time.Date(2023,time.May, 4, 18, 0, 0, 0, time.UTC).Format(time.RFC850)
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
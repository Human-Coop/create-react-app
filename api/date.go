package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now()
	weddingTime := time.Date(2024, 05, 04, 18, 30, 00, 651387237, time.UTC)
	diffTime := weddingTime.Sub(currentTime)
	fmtTime := fmt.Sprintf("%d Hours, %d Minutes, %d Seconds", diffTime.Hours(), diffTime.Minutes(), diffTime.Seconds())
	fmt.Fprintf(w, fmtTime)
}
package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime := time.Date(2024, 05, 04, 18, 30, 00, 651387237, time.UTC)
	diffTime := weddingTime.Sub(time.Now())
	fmtTime := fmt..Println("%d Hours %d Minutes %d Seconds %d NanoSeconds", int64(diffTime.Hours()), int64(diffTime.Minutes()), int64(diffTime.Seconds()), int64(diffTime.Nanoseconds()))
	fmt.Fprintf(w, fmtTime)
}
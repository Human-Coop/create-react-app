package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime := time.Date(2024, 05, 04, 18, 30, 00, 651387237, time.UTC)
	diffTime := weddingTime.Sub(time.Now())
	fmtTime := fmt.SPrint(int64(diffTime.Hours()), " Hours ", int64(diffTime.Minutes()), " Minutes ", int64(diffTime.Seconds()), " Seconds ", int64(diffTime.Nanoseconds()), " NanoSeconds")
	fmt.Fprintf(w, fmtTime)
}
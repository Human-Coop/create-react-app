package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime := time.Date(2024, 05, 04, 06, 30, 00, 00, time.Local)
	now := time.Now().Local()
	diffTime := weddingTime.Sub(now)
	totalHours := int64(diffTime.Hours())
	totalMinutes := int64(diffTime.Minutes())
	totalDays := int64(totalHours / 24)
	totalWeeks := int64(totalDays / 7)
	remainderHours := int64(totalHours % 24)
	remainderDays := int64(totalDays % 7)
	remainderMinutes := int64(totalMinutes - totalHours*60)

	fmtTime := fmt.Sprintf("%d Weeks %d Days %d Hours %d Minutes", totalWeeks, remainderDays, remainderHours, remainderMinutes)
	fmt.Fprintf(w, fmtTime)
}
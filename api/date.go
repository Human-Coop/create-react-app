package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	weddingTime := time.Date(2024, 05, 04, 18, 30, 00, 651387237, time.UTC)
	diffTime := weddingTime.Sub(time.Now())
	totalHours := int64(diffTime.Hours())
	totalMinutes := int64(diffTime.Minutes())
	totalDays := int64(totalHours / 24)
	remainderHours := totalHours % 24
	totalMonths := int64(totalDays/30)
	remainderDays := (totalDays % 30) % 7
	remainderWeeks := int64((totalDays % 30) / 7)
	remainderMinutes := int64(totalMinutes - totalHours)

	fmtTime := fmt.Sprintf("%d Months %d Weeks %d Days %d Hours %d Minutes", totalMonths, remainderWeeks, remainderDays, remainderHours, remainderMinutes)
	fmt.Fprintf(w, fmtTime)
}
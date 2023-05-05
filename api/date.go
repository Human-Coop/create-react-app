package handler

import (
	"fmt"
	"net/http"
	"time"
)

func calculate_months(days int) (months_left, days int){
	months := map[int]int{11: 31, 10: 30, 9: 31, 8: 31, 7: 30, 6: 31, 5: 30, 4: 31, 3: 31, 2: 29, 1:31, 0: 30}
	months_left := 0
	for (days - months[months_left]) > 0 {
		days := days - months[months_left]
		months_left := months_left + 1
	}
	return
}

func Handler(w http.ResponseWriter, r *http.Request) {
	intvalue := months[0].(int)
	weddingTime := time.Date(2024, 05, 04, 18, 30, 00, 651387237, time.Local)
	diffTime := weddingTime.Sub(time.Now())
	totalHours := int64(diffTime.Hours())
	totalMinutes := int64(diffTime.Minutes())
	totalDays := int64(totalHours / 24)
	remainderHours := totalHours % 24
	totalmonths, extradays := calculate_months(totalDays)
	remainderDays := extradays % 7
	remainderWeeks := extradays / 7
	remainderMinutes := int64(totalMinutes - totalHours*60)

	fmtTime := fmt.Sprintf("%d Months %d Weeks %d Days %d Hours %d Minutes", totalMonths, remainderWeeks, remainderDays, remainderHours, remainderMinutes)
	fmt.Fprintf(w, fmtTime)
}
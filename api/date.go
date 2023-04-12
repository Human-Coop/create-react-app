package handler

import (
	"fmt"
	"net/http"
	"time"
	"flag"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	deadline := flag.String("2024-05-04T17:00:00+01:00")
	flag.Parse()
	fmt.Fprintf(w, *deadline)
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
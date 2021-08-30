// main.go
package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, rq *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if rq.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Allow-Headers", "Authorization") // You can add more headers here if needed
		} else {
			// Your code goes here
			w.Write([]byte("Babo!"))
		}
	})
	http.ListenAndServe(":9999", nil)
}

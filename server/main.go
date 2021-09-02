// main.go
package main

import (
	"fmt"
	"net/http"
)

// read a body string
func bodyString(w http.ResponseWriter, r *http.Request) {
	len := r.ContentLength
	body := make([]byte, len)
	r.Body.Read(body)
	fmt.Fprintln(w, string(body)) // Client에게 보냄
	fmt.Println(string(body))     // Server에 log 찍음
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, rq *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if rq.Method == "OPTIONS" {
			// w.Header().Set("Access-Control-Allow-Headers", "Authorization") // You can add more headers here if needed
			w.Header().Set("Access-Control-Allow-Headers", "Accept")       // You can add more headers here if needed
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type") // You can add more headers here if needed
		} else {
			// Your code goes here
			w.Write([]byte("Babo!"))
			bodyString(w, rq)
		}
	})
	http.ListenAndServe(":9999", nil)
}

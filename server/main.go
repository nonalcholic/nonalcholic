// main.go
package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, rq *http.Request) {
		w.Write([]byte("Babo!"))
	})
	http.ListenAndServe(":9999", nil)
}

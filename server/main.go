// main.go
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "테스트입니다.",
	})
}

type Data struct {
	Answer    [3]int
	Result    string
	CreatedAt time.Time
}

func main() {
	// MongoDB
	// Set client options
	credential := options.Credential{
		Username: "root",
		Password: "nonalcholic",
	}
	clientOptions := options.Client().ApplyURI("mongodb://mongo:27017").SetAuth((credential))

	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	test := client.Database("test").Collection("message")

	// Disconnect to MongoDB
	// err = client.Disconnect(context.TODO())

	// if err != nil {
	// log.Fatal(err)
	// }
	// fmt.Println("Connection to MongoDB closed.")

	router := gin.Default()
	router.Use(CORSMiddleware())
	router.POST("/test/message", Test, func(c *gin.Context) {

		message := Data{Answer: [3]int{1, 2, 3}, Result: "Result", CreatedAt: time.Now().Local()}

		insertResult, err := test.InsertOne(context.TODO(), message)

		if err != nil {
			log.Fatal(err)
		}

		fmt.Println("Inserted a single document: ", insertResult.InsertedID)

	})
	router.Run(":9999")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin") // You can add more headers here if needed
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, DELETE, POST")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}

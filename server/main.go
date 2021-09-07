// main.go
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Message struct {
	Message string
	Name    string
	Score   int
}

type Trainer struct {
	Name string
	Age  int
	City string
}

func Test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "테스트입니다.",
	})
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

	test_message := client.Database("test").Collection("message")
	test_trainers := client.Database("test").Collection("trainers")

	// Disconnect to MongoDB
	// err = client.Disconnect(context.TODO())

	// if err != nil {
	// log.Fatal(err)
	// }
	// fmt.Println("Connection to MongoDB closed.")

	router := gin.Default()
	router.Use(CORSMiddleware())
	router.POST("/test/message", Test, func(c *gin.Context) {
		message := Message{"테스트 2", "민지", 100}
		ash := Trainer{"Ash", 10, "Pallet Town"}

		insertResult1, err1 := test_trainers.InsertOne(context.TODO(), ash)
		insertResult2, err2 := test_message.InsertOne(context.TODO(), message)

		if err1 != nil {
			log.Fatal(err)
		}
		if err2 != nil {
			log.Fatal(err)
		}

		fmt.Println("Inserted a single document: ", insertResult1.InsertedID)
		fmt.Println("Inserted a single document: ", insertResult2.InsertedID)

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

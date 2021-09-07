// main.go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Result(c *gin.Context) {
	fmt.Println("/result")
	c.JSON(http.StatusOK, gin.H{
		"message": "Database: data, Collection: result.",
	})
}

func Share(c *gin.Context) {
	fmt.Println("/share")
	c.JSON(http.StatusOK, gin.H{
		"message": "Database: data, Collection: share.",
	})
}

type Data struct {
	Id        string
	Answers   [3]int
	Result    string
	Ip        string
	CreatedAt time.Time
}

type Type struct {
	Id   string
	Type string
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

	result := client.Database("data").Collection("result")
	// share := client.Database("data").Collection("share")

	// Disconnect to MongoDB
	// err = client.Disconnect(context.TODO())

	// if err != nil {
	// log.Fatal(err)
	// }
	// fmt.Println("Connection to MongoDB closed.")

	router := gin.Default()
	router.Use(CORSMiddleware())

	router.POST("/result", Result, func(c *gin.Context) {
		var d Data

		err := json.NewDecoder(c.Request.Body).Decode(&d)
		if err != nil {
			log.Fatal(err)
		}

		d.CreatedAt = time.Now()

		// message := Data{Id: data["id"], Answer: [3]int{1, 2, 3}, Result: "Result", CreatedAt: time.Now().Local()}

		insertResult, err := result.InsertOne(context.TODO(), d)
		if err != nil {
			log.Fatal(err)
		}

		fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	})

	router.POST("/share", Share, func(c *gin.Context) {
		// var t Type

		// err := json.NewDecoder(c.Request.Body).Decode(&t)
		// if err != nil {
		// 	log.Fatal(err)
		// }
		// d.CreatedAt = time.Now()

		// message := Data{Id: data["id"], Answer: [3]int{1, 2, 3}, Result: "Result", CreatedAt: time.Now().Local()}

		// incrementResult, err := share.Find(context.TODO(), bson.D{Id: t.Id})
		// if err != nil {
		// 	log.Fatal(err)
		// }

		// fmt.Println("Inserted a single document: ", incrementResult.InsertedID)
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

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
	"go.mongodb.org/mongo-driver/bson" // @@@@
	"go.mongodb.org/mongo-driver/bson/primitive"
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
	Answers   [12]int
	Result    string
	Ip        string
	CreatedAt time.Time
}

type Type struct {
	Id   string
	Type string
}



type FindData struct {
	ID          primitive.ObjectID `bson:"_id"`
	Answers [12]int	`bson:"answers"`
	CreatedAt time.Time `bson:"createdat"`
	UserID string `bson:"id"`
	Instagram int `bson:"instagram"`
	Ip string `bson:"ip"`
	Kakao int `bson:"kakao"`
	Link int `bson:"link"`
	Result string `bson:"result"`
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
		var t Type

		err := json.NewDecoder(c.Request.Body).Decode(&t)
		if err != nil {
			log.Fatal(err)
		}

		f := FindData{}
		filter := bson.M{"id": t.Id}
		err2 := result.FindOne(context.TODO(), filter).Decode(&f)

		if err2 != nil {
		    log.Fatal(err2)
		}
		
		fmt.Println(f.Kakao)

		var previous int
		if (t.Type == "kakao") {previous = f.Kakao}
		if (t.Type == "instagram") {previous = f.Instagram}
		if (t.Type == "link"){ previous = f.Link}
		
		filter2 := bson.M{"id": t.Id}
		update := bson.M{
			"$set": bson.M{
				t.Type: previous + 1,
			},
		}

		incrementResult, err := result.UpdateOne(context.TODO(), filter2, update)

		if err != nil {
			log.Fatal(err)
		}

		fmt.Println("Inserted a single document: ", incrementResult)
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

// main.go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	// "log"
	"os"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/template97/nonalcholic/server/cors"
	"github.com/template97/nonalcholic/server/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// Connect with MongoDB ------------------------------------------------------
	// Set client options
	credential := options.Credential{
		Username: "root",
		Password: "nonalcholic",
	}
	mongo_port := os.Getenv("MONGO_PORT")
	mongo_url := fmt.Sprintf("mongodb://mongo:%s", mongo_port)
	clientOptions := options.Client().ApplyURI(mongo_url).SetAuth((credential))

	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		fmt.Println(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Connected to MongoDB!")

	result := client.Database("data").Collection("result")

	// Disconnect to MongoDB
	// err = client.Disconnect(context.TODO())
	// if err != nil {
	// fmt.Println(err)
	// }
	// fmt.Println("Connection to MongoDB closed.")

	router := gin.Default()
	router.Use(cors.CORSMiddleware())

	// HTTP with Client ----------------------------------------------------------
	//// Client로부터 받은 결과를 result에 저장
	router.POST("/result", func(c *gin.Context) {
		var d models.Data

		err := json.NewDecoder(c.Request.Body).Decode(&d)
		if err != nil {
			fmt.Println(err)
		}

		d.CreatedAt = time.Now()

		fmt.Println("@@@@@@@@", "In /result, id:", d.Id)

		insertResult, err := result.InsertOne(context.TODO(), d)
		if err != nil {
			fmt.Println(err)
		}

		fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	})

	//// Client가 공유한 SNS의 종류/횟수를 result에 저장
	router.POST("/share", func(c *gin.Context) {
		var t models.Type

		err := json.NewDecoder(c.Request.Body).Decode(&t)
		if err != nil {
			fmt.Println(err)
		}

		var f models.FindData
		filter := bson.M{"id": t.Id}
		err2 := result.FindOne(context.TODO(), filter).Decode(&f)

		if err2 != nil {
			fmt.Println(err2)
		}

		var previous int
		if t.Type == "kakao" {
			previous = f.Kakao
		}
		// if t.Type == "instagram" {
		// 	previous = f.Instagram
		// }
		if t.Type == "link" {
			previous = f.Link
		}

		filter2 := bson.M{"id": t.Id}
		update := bson.M{
			"$set": bson.M{
				t.Type: previous + 1,
			},
		}

		incrementResult, err3 := result.UpdateOne(context.TODO(), filter2, update)

		if err3 != nil {
			fmt.Println(err3)
		}

		fmt.Println("Inserted a single document: ", incrementResult)
	})

	//// Client에게 result에 저장된 mbti별 수를 보냄
	router.POST("/statistics", func(c *gin.Context) { // c := types: MBTIList
	fmt.Println("@@@@@@@@@@@@@@@@@@@@@statistics!!!!!!!!!!!!!")
		var m models.Mbti
		var cr models.CountResult
		err := json.NewDecoder(c.Request.Body).Decode(&m)
		if err != nil {
			fmt.Println(err)
		}
		for i := 0; i < 16; i++ {
			filter := bson.M{"result": m.Types[i].Type}
			total, err := result.CountDocuments(context.TODO(), filter, nil)
			var ct models.CountType
			ct.Type = m.Types[i].Type
			ct.Count = total
			cr.Results[i] = ct
			if err != nil {
				fmt.Println(err)
			}
		}
		c.JSON(200, gin.H{"results": cr.Results})
	})

	router.Run(":9999")
}

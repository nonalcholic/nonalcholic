package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Data struct {
	Id        string
	Answers   [12]string
	Result    string
	Ip        string
	CreatedAt time.Time
}

type Type struct {
	Id   string
	Type string
}

type FindData struct {
	ID        primitive.ObjectID `bson:"_id"`
	Answers   [12]int            `bson:"answers"`
	CreatedAt time.Time          `bson:"createdat"`
	UserID    string             `bson:"id"`
	Instagram int                `bson:"instagram"`
	Ip        string             `bson:"ip"`
	Kakao     int                `bson:"kakao"`
	Link      int                `bson:"link"`
	Result    string             `bson:"result"`
}

type MbtiType struct {
	Type string
}
type Mbti struct {
	Types [16]MbtiType
}
type CountType struct {
	Type  string `bson:"result"`
	Count int64
}
type CountResult struct {
	Results [16]CountType
}

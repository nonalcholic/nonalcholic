package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Result struct {
	Id        string
	Answers   [12]string
	Result    string
	CreatedAt time.Time
	Link      int
	// Instagram int
	Kakao int
}

type Type struct {
	Id   string
	Type string
}

type FindData struct {
	ID        primitive.ObjectID `bson:"_id"`
	UserID    string             `bson:"id"`
	Answers   [12]string         `bson:"answers"`
	Result    string             `bson:"result"`
	CreatedAt time.Time          `bson:"createdat"`
	Link      int                `bson:"link"`
	// Instagram int                `bson:"instagram"`
	Kakao int `bson:"kakao"`
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

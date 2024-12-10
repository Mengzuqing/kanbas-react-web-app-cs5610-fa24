
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as quizClient from "./client";
import * as courseClient from "../client";

export default function ReviewQuiz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { qid } = useParams();

  interface Question {
    _id: string; // Example ID field
    quizId: string; // ID of the associated quiz
    type: "Multiple Choice" | "True/False" | "Fill in the Blank"; // Restrict type to valid enum values
    title: string; // Question title
    text?: string; // Optional question text
    points: number; // Points for the question
    choices?: { choiceText: string; isCorrect: boolean }[] | [];
    correctAnswers?: string[]; // Array of correct answers for "Fill in the Blank"
    trueFalseAnswer?: boolean; // Boolean answer for "True/False" questions
    createdAt?: Date; // Timestamp for creation
    updatedAt?: Date; // Timestamp for last update
  }

  interface Answer {
    questionId: string;
    selectedChoices?: string[];
    textAnswer?: string;
    trueFalseAnswer?: boolean;
    isCorrect?: boolean;
  }

  interface Attempt {
    quizId: string;
    userId: string;
    courseId: string;
    attemptNumber: number;
    score: number;
    answers: Answer[];
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [quiz, setQuiz] = useState<any>({});
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  // Fetch quiz, questions, and attempt details
  useEffect(() => {
    const fetchQuizData = async () => {
      if (!qid || !currentUser) return;
  
      try {
        const [quizDetails, questionList, attemptDetails]: [
          any,
          Question[],
          { data: Attempt | null } | null
        ] = await Promise.all([
          courseClient.findQuizById(qid),
          quizClient.findQuestionsForQuiz(qid),
          quizClient.findAttemptByQuizAndUser(qid, currentUser._id), // API to fetch the attempt
        ]);
  
        console.log("Fetched Attempt Details:", attemptDetails);
  
        // Ensure attemptDetails.data exists and is valid
        const attemptData = attemptDetails?.data || null;
  
        setQuiz(quizDetails);
        setQuestions(questionList);
        setAttempt(attemptData); // Correctly handle null or valid data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchQuizData();
  }, [qid, currentUser]);
  

  return (
    <div>
      {attempt && questions.length > 0 && (
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "800px",
            margin: "20px auto",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>
            {quiz.title}
          </h1>
          <p
            style={{ color: "#e74c3c", fontSize: "14px", marginBottom: "20px" }}
          >
            {quiz.description}
          </p>
          <p>
            <b>Score:</b> {attempt.score} /{" "}
            {questions.reduce((total, q) => total + q.points, 0)}
          </p>
          {questions.map((question, index) => {
            const userAnswer = attempt.answers.find(
              (ans) => ans.questionId === question._id
            );
            return (
              <div
                key={question._id}
                style={{
                  marginBottom: "20px",
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div style={{ marginBottom: "15px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Question {index + 1}
                  </span>
                  <span style={{ float: "right" }}>{question.points} pts</span>
                </div>
                <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                  {question.title}
                </p>
                <div style={{ marginBottom: "15px" }}>
                  <b>Your Answer:</b>{" "}
                  {question.type === "Multiple Choice"
                    ? userAnswer?.selectedChoices?.join(", ") || "No Answer"
                    : question.type === "Fill in the Blank"
                    ? userAnswer?.textAnswer || "No Answer"
                    : question.type === "True/False"
                    ? userAnswer?.trueFalseAnswer
                      ? "True"
                      : "False"
                    : "No Answer"}
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <b>Correct Answer:</b>{" "}
                  {question.type === "Multiple Choice"
                    ? question.choices
                        ?.filter((choice) => choice.isCorrect)
                        .map((choice) => choice.choiceText)
                        .join(", ")
                    : question.type === "Fill in the Blank"
                    ? question.correctAnswers?.join(", ")
                    : question.type === "True/False"
                    ? question.trueFalseAnswer
                      ? "True"
                      : "False"
                    : "No Answer"}
                </div>
                <div>
                  <b>
                    Result:{" "}
                    {userAnswer?.isCorrect ? (
                      <span style={{ color: "green" }}>Correct ✅</span>
                    ) : (
                      <span style={{ color: "red" }}>Incorrect ❌</span>
                    )}
                  </b>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
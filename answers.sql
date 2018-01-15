SELECT Questions.ID, COUNT(Answers.QuestionID) AS NumberOfAnswers
FROM (Answers
INNER JOIN Questions ON Answers.QuestionID = Questions.ID)
GROUP BY Questions.ID
HAVING COUNT(Answers.QuestionId) > 1;
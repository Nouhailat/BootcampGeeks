data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    
    for question in data:
        user_answer = input(f"{question['question']} ").strip()
        if user_answer.lower() == question['answer'].lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append((question['question'], user_answer, question['answer']))
    
    return correct_answers, incorrect_answers, wrong_answers

def print_results(correct_answers, incorrect_answers, wrong_answers):
    print(f"\nYou got {correct_answers} correct answers and {incorrect_answers} incorrect answers.")
    
    if incorrect_answers > 0:
        print("\nYou got the following questions wrong:")
        for wrong in wrong_answers:
            print(f"Question: {wrong[0]}")
            print(f"Your answer: {wrong[1]}")
            print(f"Correct answer: {wrong[2]}")
    
    if incorrect_answers > 3:
        print("\nYou got more than 3 incorrect answers. Let's try again!")
        return True
    return False

def main():
    play_again = True
    while play_again:
        correct_answers, incorrect_answers, wrong_answers = ask_questions()
        play_again = print_results(correct_answers, incorrect_answers, wrong_answers)

main()

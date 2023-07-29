import psycopg2
from dotenv import load_dotenv
load_dotenv(dotenv_path='../.env')
import os

sql_command = """
    delete from questions_archived_by_users;
    delete from exam_participants;
    delete from exams_questions;
    delete from exam_resultmodel;
    delete from chapters;

    delete from users;
    delete from questions;
    delete from exams;
    delete from reference_exams;
    delete from subjects;
"""

try:
    # Connect to the PostgreSQL database
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        port=5432,
        database=os.getenv('DB_NAME', 'exam_hall'),
        user=os.getenv('DB_USER', 'skhan'),
        password=os.getenv('DB_PASSWORD', 'haha')
    )

    # Create a cursor object to execute SQL commands
    cursor = conn.cursor()

    # Execute the SQL command
    cursor.execute(sql_command)

    # # Fetch all rows from the result set
    # rows = cursor.fetchall()

    # # Process the fetched rows
    # for row in rows:
    #     print(row)

    # Commit the transaction
    conn.commit()

except (Exception, psycopg2.Error) as error:
    print("Error connecting to PostgreSQL database:", error)

finally:
    # Close the cursor and connection
    if cursor:
        cursor.close()
    if conn:
        conn.close()

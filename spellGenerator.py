#!/usr/bin/python
 
import sqlite3
from sqlite3 import Error
import os.path

def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)
 
    return None
 
 
def select_all_marks(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM marque;")
 
    rows = cur.fetchall()

    for row in rows:
        print(row)
 
 
def select_marks_by_id(conn, id):
    """
    Query tasks by id
    :param conn: the Connection object
    :param id:
    :return:
    """
    cur = conn.cursor()
    #TODO Corriger la Query ; selectionner une ligne avec l'id 

    id=(id,)
    cur.execute("SELECT * FROM marque WHERE id=?;",id)
 
    rows = cur.fetchall()
 
    for row in rows:
        print(row)
 
 
def main():

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    database = os.path.join(BASE_DIR, "spellGenerator.db")
 
    # create a database connection
    conn = create_connection(database)
    with conn:
        print("1. Query all tasks")
        select_all_marks(conn)

        print("2. Query only 1 task")
        select_marks_by_id(conn,5)
 
 
if __name__ == '__main__':
    main()
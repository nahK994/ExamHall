#!/bin/bash

fixture_names=("users" "subjects" "chapters" "bcs_exams" "bcs_questions" "primary_school_exams" "primary_school_questions")
for name in "${fixture_names[@]}"
do
    python3 ../manage.py loaddata ../fixtures/${name}.json
done

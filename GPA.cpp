#include <iostream>
#include <string>
using namespace std;

float gradeToGPA(float grade) {
    if (grade >= 90 ) {
        return 4.0;
    }
    else if (grade >= 80) {
        return 3.0;
    }
    else if (grade >= 70) {
        return 2.0;
    }
    else if (grade >= 60) {
        return 1.0;
    }
    else {
        return 0.0;
    }
}

int main() {
    int numofmaterial;
    cout << "Enter number of Materials: ";
    cin >> numofmaterial;

    string subjects[100];
    float grades[100];

    // ÅÏÎÇá ÇáãæÇÏ æÇáÏÑÌÇÊ
    for (int i = 0; i < numofmaterial; i++) {
        cout << "\nEnter name of Material " << i + 1 << ": ";
        cin >> subjects[i];
        cout << "Enter grade for " << subjects[i] << " (0-100): ";
        cin >> grades[i];
    }

    float totalGPA = 0.0, maxGrade = grades[0], minGrade = grades[0];
    int passed = 0, failed = 0;



  	cout << "\n====================\n";
    	cout << " Subject Details:\n";
    cout << "\n====================\n";
    for (int i = 0; i < numofmaterial; i++) {
        float subjectGPA = gradeToGPA(grades[i]);
        totalGPA += subjectGPA;

        if (grades[i] > maxGrade)
            maxGrade = grades[i];
        if (grades[i] < minGrade)
            minGrade = grades[i];
        if (grades[i] >= 60)
            passed++;
        else
            failed++;

        cout << subjects[i] << " - Grade: " << grades[i] << " - GPA: " << subjectGPA << endl;
    }

    float averageGPA = totalGPA / numofmaterial;

   cout << "\n====================\n";
    	cout << "     Result:\n";

    cout << "Average GPA: " << averageGPA << endl;
    cout << "Highest Grade: " << maxGrade << endl;
    cout << "Lowest Grade: " << minGrade << endl;
    cout << "Passed Subjects: " << passed << endl;
    cout << "Failed Subjects: " << failed << endl;


    cout << "Passed Materials => \n";
    bool hasPassed = false;
    for (int i = 0; i < numofmaterial; i++) {
        if (grades[i] >= 60) {
            cout << "- " << subjects[i] << " (" << grades[i] << ")\n";
            hasPassed = true;
        }
    }
    if (!hasPassed) cout << "No passed materials.\n";


    cout << "Failed Materials => \n";
    bool hasFailed = false;
    for (int i = 0; i < numofmaterial; i++) {
        if (grades[i] < 60) {
            cout << "- " << subjects[i] << " (" << grades[i] << ")\n";
            hasFailed = true;
        }
    }
    if (!hasFailed) cout << "No failed materials.\n";

    return 0;
}

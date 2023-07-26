import React from 'react';
 import { Survey } from 'survey-react-ui';
import jsPDF from 'jspdf';
import "survey-core/defaultV2.min.css";
import './index.css'


const SurveyComponent = () => {
    const surveyJSON = {
        "title": "Experience: WHERE I HAVE BEEN",
        "description": "Brainstorm and think of the past achievements/experiences in the following 5 areas:",
        "logoPosition": "right",
        "pages": [
            {
                "name": "Enter your Email address",
                "elements": [
                    {
                        "type": "text",
                        "name": "question1",
                        "title": "Enter Your Email Address:",
                        "isRequired": true,
                        "inputType": "email"
                    }
                ],
                "title": "Enter your Email address"
            },
            {
                "name": "page2",
                "elements": [
                    {
                        "type": "multipletext",
                        "name": "Personal Achievements",
                        "title": "Personal Achievements:",
                        "description": "Personally, you have received an award that is especially meaningful to you.",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Vocational Achievements",
                        "title": "Vocational Achievements:",
                        "description": "perhaps you have received a pattern of achievement when it comes to productivity, sales, or leadership [eg. Employee/salesman of the month]",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Relational Achievements",
                        "title": "Relational Achievements:",
                        "description": "you may enjoy a godly marriage or benefit from a friendship that comforts you in difficult times or challenges you to strive for excellence in everything you do. ",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Educational Achievements",
                        "title": "Educational Achievements:",
                        "description": "Perhaps you have an academic degree(s) or training certificates(s), or perhaps you are pursuing ongoing development in areas of special interest.",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Spiritual Achievements",
                        "title": "Spiritual Achievements:",
                        "description": "you may have a history of success in sharing your faith or leading Christians to deeper insights about their own faith. Or perhaps your own acceptance of Christ and Spiritual growth give you as sense of having attained something beyond measure.",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    }
                ],
                "title": "Using brief phrases, identify at least one significant achievements in one or more areas; as necessary"
            },
            {
                "name": "page3",
                "elements": [
                    {
                        "type": "comment",
                        "name": "Area-1",
                        "title": "Enter the name of the areas:",
                        "isRequired": true
                    }
                ],
                "title": "Based on the above, list down the areas in which you feel you could be of help to another person:"
            },
            {
                "name": "page4",
                "elements": [
                    {
                        "type": "multipletext",
                        "name": "Personal Points of Pain",
                        "title": "Personal Points of Pain ",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Vocational Points of Pain",
                        "title": "Vocational Points of Pain ",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Relational Points of Pain",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Educational Points of Pain",
                        "title": "Educational Points of Pain",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    },
                    {
                        "type": "multipletext",
                        "name": "Spiritual Points of Pain",
                        "title": "Spiritual Points of Pain",
                        "items": [
                            {
                                "name": "text1",
                                "title": "1."
                            },
                            {
                                "name": "text2",
                                "title": "2."
                            },
                            {
                                "name": "text3",
                                "title": "3."
                            },
                            {
                                "name": "text4",
                                "title": "4."
                            }
                        ]
                    }
                ],
                "title": "Likewise, there are painful experiences in your life that have in one way or another shaped you and your view of life. Using the same 5 areas, identify the specific points of pain:"
            },
            {
                "name": "page5",
                "elements": [
                    {
                        "type": "comment",
                        "name": "Enter the name of the areas",
                        "title": "Enter the name of the areas",
                        "isRequired": true
                    }
                ],
                "title": "Based on the above, list down the areas in which you feel you could be of help to another person:"
            }
        ]
    };
    const onCompleteSurvey = (survey) => {
        const pdf = new jsPDF();
        pdf.setFontSize(20);
        pdf.text('Survey Results', 10, 10);

        const surveyData = survey.data;
        let yPos = 20;

        Object.keys(surveyData).forEach((question) => {
            const answer = surveyData[question];
            let formattedAnswer;
            if (Object.keys(answer).length === 0) {
                formattedAnswer = `${question}: No answer provided`;
            } else {
                formattedAnswer = `${question}: ${JSON.stringify(answer, null, 2).replace(/[{}]/g, '')}`; // Convert answer object to formatted JSON string and remove curly braces
            }
            const lines = pdf.splitTextToSize(formattedAnswer, 180); // Split the answer into multiple lines with a maximum width of 180
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 0); // Set text color to black
            pdf.text(lines, 10, yPos); // Print the lines of the answer
            yPos += lines.length * 10 + 10; // Increase yPos based on the number of lines and add extra gap
            if (yPos >= pdf.internal.pageSize.height - 10) { // Check if the yPos exceeds the page height
                pdf.addPage(); // Add a new page
                yPos = 20; // Reset yPos to the starting position on the new page
            }
        });

        pdf.save('experience.pdf');

    };

    return <Survey json={surveyJSON} onComplete={onCompleteSurvey} />;
};

export default SurveyComponent;
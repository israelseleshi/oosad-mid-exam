import { Chapter, QuestionType } from '../../types';

export const chapter1: Chapter = {
  id: 1,
  title: "Chapter 1: Introduction to OOSAD",
  questions: [
    {
      id: 1,
      type: "multiple-choice" as QuestionType,
      text: "What best distinguishes 'industrial-strength software' from simpler applications?",
      options: [
        "Developed only by professionals",
        "Serves a single, limited purpose",
        "Manages complex behaviors, large data, and real-world entities",
        "Complexity is entirely eliminable"
      ],
      answer: "Manages complex behaviors, large data, and real-world entities"
    },
    {
      id: 2,
      type: "multiple-choice" as QuestionType,
      text: "Which is NOT an inherent source of software development complexity?",
      options: [
        "Problem domain complexity",
        "Collaborative development challenges",
        "Strict engineering standards",
        "Characterizing discrete systems"
      ],
      answer: "Strict engineering standards"
    },
    {
      id: 3,
      type: "multiple-choice" as QuestionType,
      text: "Which attribute indicates complex systems are composed of interrelated subsystems?",
      options: [
        "Relative Primitives",
        "Separation of Concerns",
        "Hierarchic Structure",
        "Stable Intermediate Forms"
      ],
      answer: "Hierarchic Structure"
    },
    {
      id: 4,
      type: "multiple-choice" as QuestionType,
      text: "What does 'Relative Primitives' imply in complex systems?",
      options: [
        "Built from unchanging components",
        "Primitives are universally agreed upon",
        "Primitives depend on observer's abstraction",
        "Primitives are individual code lines"
      ],
      answer: "Primitives depend on observer's abstraction"
    },
    {
      id: 5,
      type: "multiple-choice" as QuestionType,
      text: "'Separation of Concerns' relates most to which concepts?",
      options: [
        "Decomposition and Modularity",
        "Hierarchic Structure and Common Patterns",
        "Low Coupling and High Cohesion",
        "Stable Intermediate Forms and Relative Primitives"
      ],
      answer: "Low Coupling and High Cohesion"
    },
    {
      id: 6,
      type: "multiple-choice" as QuestionType,
      text: "What is the primary focus of Algorithmic Decomposition?",
      options: [
        "Identifying key abstractions",
        "Modeling real-world entities",
        "Breaking down by major steps",
        "Emphasizing action agents"
      ],
      answer: "Breaking down by major steps"
    },
    {
      id: 7,
      type: "multiple-choice" as QuestionType,
      text: "What is a key difference between SAD and OOA?",
      options: [
        "SAD is bottom-up, OOA is top-down",
        "SAD focuses on objects, OOA on processes",
        "SAD separates process/data, OOA integrates",
        "SAD is more scalable than OOA"
      ],
      answer: "SAD separates process/data, OOA integrates"
    },
    {
      id: 8,
      type: "multiple-choice" as QuestionType,
      text: "What are the two sub-models of the 'Essential Model' in SAD?",
      options: [
        "Data Flow and Entity Relationship",
        "Environmental and Behavioral",
        "Context and State Transition",
        "Implementation and Essential"
      ],
      answer: "Environmental and Behavioral"
    },
    {
      id: 9,
      type: "multiple-choice" as QuestionType,
      text: "What is a primary disadvantage of SAD?",
      options: [
        "Non-visual, hard to understand",
        "Over-reliance on user interaction",
        "Limited scalability, complex relationships",
        "Inability to set requirements"
      ],
      answer: "Limited scalability, complex relationships"
    },
    {
      id: 10,
      type: "multiple-choice" as QuestionType,
      text: "What is a major benefit of OOA's reuse of objects and patterns?",
      options: [
        "Eliminates design phase",
        "Steeper learning curve",
        "Reduces code, improves quality",
        "Simplifies data-process relations"
      ],
      answer: "Reduces code, improves quality"
    },
    {
      id: 11,
      type: "multiple-choice" as QuestionType,
      text: "In OOP, what does a car's 'blueprint' correspond to?",
      options: [
        "Instance variable",
        "Specific object",
        "Method call",
        "Class"
      ],
      answer: "Class"
    },
    {
      id: 12,
      type: "multiple-choice" as QuestionType,
      text: "Hiding internal data and procedures is known as:",
      options: [
        "Inheritance",
        "Polymorphism",
        "Instantiation",
        "Encapsulation / Information Hiding"
      ],
      answer: "Encapsulation / Information Hiding"
    },
    {
      id: 13,
      type: "multiple-choice" as QuestionType,
      text: "What allows a new class to extend an existing class?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Instantiation"
      ],
      answer: "Inheritance"
    },
    {
      id: 14,
      type: "multiple-choice" as QuestionType,
      text: "Polymorphism implies, per the vehicle speed limit example:",
      options: [
        "Object belongs to multiple classes",
        "Objects respond differently to same message",
        "General class code applies to subclasses",
        "Objects check class before messaging"
      ],
      answer: "General class code applies to subclasses"
    },
    {
      id: 15,
      type: "multiple-choice" as QuestionType,
      text: "A 'methodology' in software development is:",
      options: [
        "Specific program or CASE tool",
        "Analyst’s process like interviews",
        "Step-by-step approaches and rules",
        "Final information system"
      ],
      answer: "Step-by-step approaches and rules"
    },
    {
      id: 16,
      type: "multiple-choice" as QuestionType,
      text: "What drives the emergence of software methodologies?",
      options: [
        "New programming languages",
        "Better documentation tools",
        "Managing complexity",
        "Developer preferences"
      ],
      answer: "Managing complexity"
    },
    {
      id: 17,
      type: "multiple-choice" as QuestionType,
      text: "UML is described as a:",
      options: [
        "Development process",
        "Programming language",
        "Modeling language for OO",
        "CASE tool for code generation"
      ],
      answer: "Modeling language for OO"
    },
    {
      id: 18,
      type: "multiple-choice" as QuestionType,
      text: "Which UML view focuses on 'what the owner wants'?",
      options: [
        "Architect’s View",
        "Builder’s View",
        "Owner’s View",
        "Developer's View"
      ],
      answer: "Owner’s View"
    },
    {
      id: 19,
      type: "multiple-choice" as QuestionType,
      text: "In which OO phase is the model built on real-world objects, focusing on 'what' without implementation?",
      options: [
        "Implementation and Testing",
        "System Design",
        "Analysis Phase",
        "Object Design"
      ],
      answer: "Analysis Phase"
    },
    {
      id: 20,
      type: "multiple-choice" as QuestionType,
      text: "What is least likely a primary focus of Object Design?",
      options: [
        "Identifying classes",
        "Establishing associations",
        "Defining internal details",
        "Formulating problem statement"
      ],
      answer: "Formulating problem statement"
    },
    {
      id: 21,
      type: "fill-in-blank" as QuestionType,
      text: "Systems thinking sees relationships among information systems, organizations, and the __________.",
      answer: "environment"
    },
    {
      id: 22,
      type: "fill-in-blank" as QuestionType,
      text: "Breaking a system into smaller components is known as __________.",
      answer: "Decomposition"
    },
    {
      id: 23,
      type: "fill-in-blank" as QuestionType,
      text: "In OO terms, data and logic representing a real-world entity is an __________.",
      answer: "Object"
    },
    {
      id: 24,
      type: "fill-in-blank" as QuestionType,
      text: "The OO principle where objects respond differently to the same message is __________.",
      answer: "Polymorphism"
    },
    {
      id: 25,
      type: "fill-in-blank" as QuestionType,
      text: "UML is a __________ language for OO analysis, design, and deployment.",
      answer: "modeling"
    },
    {
      id: 26,
      type: "true-false" as QuestionType,
      text: "Software complexity is an accidental property that can be fully avoided.",
      answer: "False"
    },
    {
      id: 27,
      type: "true-false" as QuestionType,
      text: "SAD models systems as collections of objects encapsulating data and behavior.",
      answer: "False"
    },
    {
      id: 28,
      type: "true-false" as QuestionType,
      text: "Encapsulation suggests objects allow direct access to internal data.",
      answer: "False"
    },
    {
      id: 29,
      type: "true-false" as QuestionType,
      text: "The 'Essential Model' in SAD defines how the system accomplishes its purpose.",
      answer: "False"
    },
    {
      id: 30,
      type: "true-false" as QuestionType,
      text: "UML does not support forward or backward engineering.",
      answer: "False"
    },
    {
      id: 31,
      type: "short-answer" as QuestionType,
      text: "Explain three common attributes of complex systems.",
      answer: ["Hierarchic Structure: Systems have subsystems forming layers. Separation of Concerns: Strong internal, weak external linkages enable isolated study. Stable Intermediate Forms: Systems evolve from simpler, working systems."]
    },
    {
      id: 32,
      type: "short-answer" as QuestionType,
      text: "Distinguish Algorithmic Decomposition from Object-Oriented Decomposition.",
      answer: ["Algorithmic Decomposition breaks problems into processing steps, focusing on event order. Object-Oriented Decomposition identifies objects, emphasizing data and behavior agents."]
    },
    {
      id: 33,
      type: "short-answer" as QuestionType,
      text: "Explain Inheritance in OOP with an analogy or example.",
      answer: ["Inheritance lets a subclass extend a superclass, inheriting its attributes and methods. Example: A convertible car class inherits from a car class, adding a roof mechanism."]
    },
    {
      id: 34,
      type: "short-answer" as QuestionType,
      text: "What is the purpose of the Analysis Phase in OO development, and what should its models not include?",
      answer: ["The Analysis Phase formulates problems and models system functions using real-world objects. Models should not include implementation details."]
    },
    {
      id: 35,
      type: "short-answer" as QuestionType,
      text: "What are the two sources of a methodology?",
      answer: ["A methodology blends lessons learned from past generalizations and ideas for future improvements."]
    }
  ]
};
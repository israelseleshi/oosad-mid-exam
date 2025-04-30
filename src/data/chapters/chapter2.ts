import { Chapter, QuestionType } from '../../types';

export const chapter2: Chapter = {
  id: 2,
  title: "Chapter 2: Object Model & SDLC",
  questions: [
    {
      id: 1,
      type: "multiple-choice" as QuestionType,
      text: "The Object Model, as described in the document, encompasses four major essential elements. Which of the following is NOT one of these essential elements?",
      options: [
        "Abstraction",
        "Typing",
        "Encapsulation",
        "Hierarchy"
      ],
      answer: "Typing"
    },
    {
      id: 2,
      type: "multiple-choice" as QuestionType,
      text: "How does the document define \"Abstraction\" in the context of object-oriented programming?",
      options: [
        "The property that allows objects to be built from other objects, sharing commonality.",
        "The ability of an operation to exhibit different behaviors in different instances depending on data types.",
        "The process of taking away characteristics to reduce something to its essential features, focusing on observable behavior.",
        "The process of hiding internal state details and associating behavior strongly with data."
      ],
      answer: "The process of taking away characteristics to reduce something to its essential features, focusing on observable behavior."
    },
    {
      id: 3,
      type: "multiple-choice" as QuestionType,
      text: "Which type of abstraction, mentioned in the text, represents a useful model of a problem domain or solution domain entity?",
      options: [
        "Virtual machine abstraction",
        "Entity abstraction",
        "Action abstraction",
        "Coincidental abstraction"
      ],
      answer: "Entity abstraction"
    },
    {
      id: 4,
      type: "multiple-choice" as QuestionType,
      text: "What is the relationship between Abstraction and Encapsulation as described in the chapter?",
      options: [
        "They are identical concepts.",
        "Encapsulation is a type of Abstraction.",
        "Abstraction focuses on implementation details, while Encapsulation focuses on observable behavior.",
        "Abstraction focuses on observable behavior, while Encapsulation focuses on the implementation hiding details."
      ],
      answer: "Abstraction focuses on observable behavior, while Encapsulation focuses on the implementation hiding details."
    },
    {
      id: 5,
      type: "multiple-choice" as QuestionType,
      text: "Polymorphism allows different objects to respond to the same message differently. The document gives an example of the '+' operator. What does this illustrate?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Function overloading",
        "Operator overloading"
      ],
      answer: "Operator overloading"
    },
    {
      id: 6,
      type: "multiple-choice" as QuestionType,
      text: "What fundamental object-oriented concept provides the idea of reusability by allowing new classes to be derived from existing ones, inheriting their features?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Association"
      ],
      answer: "Inheritance"
    },
    {
      id: 7,
      type: "multiple-choice" as QuestionType,
      text: "What type of relationship is represented by \"is-a\" or \"kind-of\", where subclasses inherit from super-classes?",
      options: [
        "Association",
        "Dependency",
        "Generalization/Specialization",
        "Aggregation"
      ],
      answer: "Generalization/Specialization"
    },
    {
      id: 8,
      type: "multiple-choice" as QuestionType,
      text: "An aggregation relationship is often described as a:",
      options: [
        "\"uses\" relationship",
        "\"part-of\" or \"has-a\" relationship",
        "\"is-a\" relationship",
        "\"responds-to\" relationship"
      ],
      answer: "\"part-of\" or \"has-a\" relationship"
    },
    {
      id: 9,
      type: "multiple-choice" as QuestionType,
      text: "What is the term for the property of an object that allows its existence to transcend time (e.g., saved to disk) and/or space (e.g., moved across a network)?",
      options: [
        "Persistence",
        "Concurrency",
        "Modularity",
        "Typing"
      ],
      answer: "Persistence"
    },
    {
      id: 10,
      type: "multiple-choice" as QuestionType,
      text: "Which SDLC model is described as the \"classic\" methodology, linear and sequential, requiring one phase to be completed before the next begins, and often criticized for inflexibility?",
      options: [
        "Spiral Model",
        "Prototyping Model",
        "Waterfall Model",
        "Agile Methodologies"
      ],
      answer: "Waterfall Model"
    },
    {
      id: 11,
      type: "multiple-choice" as QuestionType,
      text: "The Prototyping model is particularly useful when:",
      options: [
        "The customers are unclear about their requirements.",
        "Requirements are very stable and well-understood from the start.",
        "The project involves high risk and requires constant risk assessment.",
        "The development team prefers comprehensive documentation over working software."
      ],
      answer: "The customers are unclear about their requirements."
    },
    {
      id: 12,
      type: "multiple-choice" as QuestionType,
      text: "What is a key difference between the Prototyping approach and the Incremental & Iterative approach as presented in the document?",
      options: [
        "Incremental development uses a control list, while Prototyping relies solely on user feedback.",
        "Prototyping builds successive versions, while Incremental is done in one go.",
        "Incremental development involves users, while Prototyping does not.",
        "Prototyping aims to implement all major requirements in a model, while Incremental implements a selected set of requirements per version."
      ],
      answer: "Prototyping aims to implement all major requirements in a model, while Incremental implements a selected set of requirements per version."
    },
    {
      id: 13,
      type: "multiple-choice" as QuestionType,
      text: "The Spiral Model is characterized primarily by its focus on:",
      options: [
        "Rapid delivery of functional components.",
        "Risk management.",
        "Minimizing documentation.",
        "User interface design."
      ],
      answer: "Risk management."
    },
    {
      id: 14,
      type: "multiple-choice" as QuestionType,
      text: "Agile methodologies, as described by the Agile Manifesto values, prioritize:",
      options: [
        "Contract negotiation over customer collaboration.",
        "Processes and tools over individuals and interactions.",
        "Responding to change over following a plan.",
        "Comprehensive documentation over working software."
      ],
      answer: "Responding to change over following a plan."
    },
    {
      id: 15,
      type: "multiple-choice" as QuestionType,
      text: "The Unified Process (UP) is described as being based on four key principles. Which of the following is NOT one of those principles?",
      options: [
        "Iterative and incremental",
        "Use case driven",
        "Documentation focused",
        "Architecture centric"
      ],
      answer: "Documentation focused"
    },
    {
      id: 16,
      type: "multiple-choice" as QuestionType,
      text: "In the Unified Process, which phase aims primarily to determine the economic viability of the proposed system and establish an initial understanding of scope and requirements?",
      options: [
        "Elaboration Phase",
        "Transition Phase",
        "Construction Phase",
        "Inception Phase"
      ],
      answer: "Inception Phase"
    },
    {
      id: 17,
      type: "multiple-choice" as QuestionType,
      text: "Which phase of the Unified Process focuses on producing the first operational-quality version (beta release) of the information system?",
      options: [
        "Transition Phase",
        "Inception Phase",
        "Construction Phase",
        "Elaboration Phase"
      ],
      answer: "Construction Phase"
    },
    {
      id: 18,
      type: "multiple-choice" as QuestionType,
      text: "UML (Unified Modeling Language) is primarily defined as a:",
      options: [
        "Programming language.",
        "Modeling language with graphical notations for OO systems.",
        "Software development process.",
        "Project management methodology."
      ],
      answer: "Modeling language with graphical notations for OO systems."
    },
    {
      id: 19,
      type: "multiple-choice" as QuestionType,
      text: "UML diagrams are broadly categorized into three types in the document. What are they?",
      options: [
        "Analysis, Design, Implementation",
        "Static, Dynamic, Interactive",
        "Structure, Behavior, Interaction",
        "Conceptual, Logical, Physical"
      ],
      answer: "Structure, Behavior, Interaction"
    },
    {
      id: 20,
      type: "multiple-choice" as QuestionType,
      text: "Which type of UML diagram is specifically used to describe the step-by-step operational workflow of components, showing the flow from one activity to another, often used for business process modeling?",
      options: [
        "Sequence Diagram",
        "Class Diagram",
        "Activity Diagram",
        "Use Case Diagram"
      ],
      answer: "Activity Diagram"
    },
    {
      id: 21,
      type: "fill-in-blank" as QuestionType,
      text: "Abstraction focuses on the __________ behavior of an object, whereas encapsulation focuses on the implementation that gives rise to this behavior.",
      answer: "observable"
    },
    {
      id: 22,
      type: "fill-in-blank" as QuestionType,
      text: "Inheritance allows explicitly taking advantage of the __________ of objects when constructing new classes.",
      answer: "commonality"
    },
    {
      id: 23,
      type: "fill-in-blank" as QuestionType,
      text: "The SDLC model that combines the Waterfall Model with prototyping and iteration, focusing heavily on risk assessment in mini-projects, is the __________ model.",
      answer: "Spiral"
    },
    {
      id: 24,
      type: "fill-in-blank" as QuestionType,
      text: "The Unified Process is described as being __________ driven, meaning development is planned and organized around a list of these items.",
      answer: "use case"
    },
    {
      id: 25,
      type: "fill-in-blank" as QuestionType,
      text: "In UML, structural things represent the static parts of a model and are considered the __________ of a model.",
      answer: "nouns"
    },
    {
      id: 26,
      type: "true-false" as QuestionType,
      text: "According to the object model presented, \"Typing\" is considered a major, essential element, without which a model is not object-oriented.",
      answer: "False"
    },
    {
      id: 27,
      type: "true-false" as QuestionType,
      text: "Polymorphism means that a single function name can only be used to handle one specific number and type of argument.",
      answer: "False"
    },
    {
      id: 28,
      type: "true-false" as QuestionType,
      text: "The Waterfall model is highly flexible and easily accommodates changes in requirements late in the development cycle.",
      answer: "False"
    },
    {
      id: 29,
      type: "true-false" as QuestionType,
      text: "Agile methodologies emphasize comprehensive documentation and following a rigid plan over responding to change and customer collaboration.",
      answer: "False"
    },
    {
      id: 30,
      type: "true-false" as QuestionType,
      text: "A UML Use Case Diagram primarily shows the internal structure of classes and their attributes and methods.",
      answer: "False"
    },
    {
      id: 31,
      type: "short-answer" as QuestionType,
      text: "Explain the difference between Association and Aggregation in object-oriented concepts, using the terminology presented in the document (e.g., \"uses\", \"part-of\").",
      answer: ["Association represents a general relationship where one class uses another, often representing an activity or connection between objects (e.g., a doctor is associated with multiple patients). Aggregation is a specific type of association representing a \"part-of\" or \"has-a\" relationship, where a whole class is composed of parts (e.g., a car \"has-a\" motor)."]
    },
    {
      id: 32,
      type: "short-answer" as QuestionType,
      text: "Briefly describe the purpose of the \"Elaboration Phase\" in the Unified Process and list two of its key deliverables.",
      answer: ["The purpose of the Elaboration Phase in the Unified Process is to refine initial requirements and architecture, analyze risks, and establish a solid baseline for construction. Key deliverables include the completed domain model and the project management plan (Other valid answers: completed business model, completed requirements artifacts, completed analysis artifacts, updated architecture, updated risk list, completed business case)."]
    },
    {
      id: 33,
      type: "short-answer" as QuestionType,
      text: "What are the three main building blocks of UML as listed in the document? Briefly describe one of them.",
      answer: ["The three main building blocks of UML are Things, Relationships, and Diagrams. Things are the primary abstractions, representing structural (like Class, Node), behavioral (like Interaction, State Machine), grouping (like Package), or annotational (like Note) elements. (Alternatively: Relationships tie things together, like Dependency, Association, Generalization. Diagrams graphically represent sets of elements from different perspectives)."]
    },
    {
      id: 34,
      type: "short-answer" as QuestionType,
      text: "Identify and briefly describe the four components that constitute a valid UML Use Case.",
      answer: ["The four components of a Use Case are: 1) Goal: The successful outcome meaningful to stakeholders. 2) Stakeholders: Entities (including Actors) affected by the outcome. 3) System: The entity providing services to achieve the goal. 4) Scenario: The ordered sequence of interactions between actors and the system to accomplish the goal."]
    },
    {
      id: 35,
      type: "short-answer" as QuestionType,
      text: "What is the difference between a Sequence Diagram and an Activity Diagram in UML, based on their primary focus as described in the text?",
      answer: ["A Sequence Diagram focuses on the time ordering of messages exchanged between objects, showing the temporal sequence of interactions. An Activity Diagram focuses on the flow of control from one activity or action to another, often modeling workflow or business processes."]
    }
  ]
};
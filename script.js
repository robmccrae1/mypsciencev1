// Complete JavaScript File - Part 1
const conceptsData = {
    related: [
        {
            term: "Balance (Biology)",
            definition: "The dynamic equilibrium that exists among members of a stable natural community; the regulation of the internal environment of an organism."
        },
        {
            term: "Balance (Chemistry)",
            definition: "A state of equilibrium or stable distribution."
        },
        {
            term: "Conditions (Chemistry)",
            definition: "The environment, both physical and chemical, of a reaction or process; factors which contribute to an interaction including temperature, pressure, concentration, pH and the absence or presence of a catalyst."
        },
        {
            term: "Consequences",
            definition: "The observable or quantifiable effects, results, or outcomes correlated with an earlier event or events."
        },
        {
            term: "Development (Physics)",
            definition: "The process of applying theory to data and observations in order to improve, progress, or further scientific understanding."
        },
        {
            term: "Energy",
            definition: "The capacity of an object to do work or transfer heat."
        },
        {
            term: "Environment (Biology)",
            definition: "All of the biotic and abiotic factors that act on an organism, population or community and influence its survival, evolution and development."
        },
        {
            term: "Environment (Physics)",
            definition: "A description of the universe or a closed system through the application of the laws of physics; the complex of physical conditions or climate affecting a habitat or community."
        },
        {
            term: "Evidence",
            definition: "Support for a proposition derived from observation and interpretation of data."
        },
        {
            term: "Form",
            definition: "The features of an object that can be observed, identified, described, classified and categorized."
        },
        {
            term: "Function",
            definition: "A purpose, a role or a way of behaving that can be investigated; a mathematical relationship between variables."
        },
        {
            term: "Interaction",
            definition: "The effect or effects two or more systems, bodies, substances or organisms have on one another, so that the overall result is not simply the sum of the separate effects."
        },
        {
            term: "Models",
            definition: "Representations used for testing scientific theories or proposals that can be accurately repeated and validated; simulations used for explaining or predicting processes which may not be observable or to understand the dynamics of multiple underlying phenomena of a complex system."
        },
        {
            term: "Movement",
            definition: "The act, process, or result of displacing from one location or position to another within a defined frame of reference."
        },
        {
            term: "Patterns",
            definition: "The distribution of variables in time or space; sequences of events or features."
        },
        {
            term: "Transfer (Chemistry)",
            definition: "The net movement of matter or particles from one location to another."
        },
        {
            term: "Transformation (Biology)",
            definition: "Differentiation of a cell; change of energy form, including at a molecular level; alteration of molecules and metabolism and/or genetic make-up of an organism or species and consequently a community, relative to external factors."
        },
        {
            term: "Transformation (Physics)",
            definition: "A change from one well-defined state to another well-defined state; an alteration in form or condition, including energy and particle nature."
        }
    ],
    glossary: [
        {
            term: "Cultural",
            definition: "Patterns of knowledge, behaviour, beliefs, shared attitudes, values, goals and practices that characterize groups of people."
        },
        {
            term: "Data",
            definition: "Measurement of a parameter that can be quantitative (volume, temperature, pH and so on) or qualitative (colour, shape, texture and so on)."
        },
        {
            term: "Dependent variable",
            definition: "The variable in which values are measured in the experiment."
        },
        {
            term: "Economic",
            definition: "Production, distribution, and use of income, wealth, and commodities."
        },
        {
            term: "Environmental",
            definition: "Circumstances, objects, or conditions by which one is surrounded."
        },
        {
            term: "Ethical",
            definition: "Process of rational inquiry to decide on issues as right or wrong, as applied to the people and their actions."
        },
        {
            term: "Extensions to the method",
            definition: "Developments for further inquiry as related to the outcome of the investigation."
        },
        {
            term: "Hypothesis",
            definition: "A tentative explanation for an observation or phenomenon that requires experimental confirmation; can take the form of a question or a statement."
        },
        {
            term: "Independent variable",
            definition: "The variable that is selected and manipulated by the investigator in an experiment."
        },
        {
            term: "Moral",
            definition: "Principles of right or wrong behaviour derived from a particular society."
        },
        {
            term: "Numerical forms",
            definition: "May include mathematical calculations such as averaging or determining values from a graph or table."
        },
        {
            term: "Political",
            definition: "Relates to government or public affairs."
        },
        {
            term: "Prediction",
            definition: "Give an expected result of an upcoming action or event."
        }
    ]
};
// Add these additional glossary terms to the glossary array in conceptsData
conceptsData.glossary.push(
    {
        term: "Qualitative data",
        definition: "Refers to non-numerical data or information that is difficult to measure in a numerical way."
    },
    {
        term: "Quantitative data",
        definition: "Refers to numerical measurements of the variables associated with the investigation."
    },
    {
        term: "Social",
        definition: "Interactions between groups of people involving issues such as welfare, safety, rights, justice or class."
    },
    {
        term: "Transforming data",
        definition: "Involves processing raw data into a form suitable for visual representation. This process may involve combining and manipulating raw data to determine the value of a physical quantity and taking averages of measurements."
    },
    {
        term: "Unfamiliar situation",
        definition: "Refers to a problem or situation in which the context or the application is modified so that it is considered unfamiliar for the student."
    },
    {
        term: "Validity of the method",
        definition: "Refers to whether the method allows for the collection of sufficient valid data to answer the question. This includes factors such as whether the measuring instrument measures what it is supposed to measure, the conditions of the experiment and the manipulation of variables (fair testing)."
    },
    {
        term: "Visual forms",
        definition: "May include drawing graphs of various types appropriate to the kind of data being displayed (for example, line graphs, bar graphs, histograms or pie charts)."
    }
);

// Add the commands array to conceptsData
conceptsData.commands = [
    {
        term: "Analyse",
        definition: "Break down in order to bring out the essential elements or structure. (To identify parts and relationships, and to interpret information to reach conclusions.)"
    },
    {
        term: "Annotate",
        definition: "Add brief notes to a diagram or graph."
    },
    {
        term: "Apply",
        definition: "Use knowledge and understanding in response to a given situation or real circumstances. Use an idea, equation, principle, theory or law in relation to a given problem or issue."
    },
    {
        term: "Calculate",
        definition: "Obtain a numerical answer showing the relevant stages in the working."
    },
    {
        term: "Classify",
        definition: "Arrange or order by class or category."
    },
    {
        term: "Comment",
        definition: "Give a judgment based on a given statement or result of a calculation."
    },
    {
        term: "Construct",
        definition: "Display information in a diagrammatic or logical form."
    },
    {
        term: "Define",
        definition: "Give the precise meaning of a word, phrase, concept or physical quantity."
    },
    {
        term: "Demonstrate",
        definition: "Make clear by reasoning or evidence, illustrating with examples or practical application."
    },
    {
        term: "Describe",
        definition: "Give a detailed account or picture of a situation, event, pattern or process."
    },
    {
        term: "Design",
        definition: "Produce a plan, simulation or model."
    },
    {
        term: "Determine",
        definition: "Obtain the only possible answer."
    },
    {
        term: "Discuss",
        definition: "Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence."
    },
    {
        term: "Document",
        definition: "Credit sources of information used by referencing (or citing), following one recognized referencing system. References should be included in the text and also at the end of the piece of work in a reference list or bibliography."
    },
    {
        term: "Draw",
        definition: "Represent by means of a labelled, accurate diagram or graph, using a pencil. A ruler (straight edge) should be used for straight lines. Diagrams should be drawn to scale. Graphs should have points correctly plotted (if appropriate) and joined in a straight line or smooth curve."
    },
    {
        term: "Estimate",
        definition: "Obtain an approximate value for an unknown quantity."
    },
    {
        term: "Evaluate",
        definition: "Make an appraisal by weighing up the strengths and limitations."
    },
    {
        term: "Explain",
        definition: "Give a detailed account including reasons and causes. (See also 'Justify'.)"
    },
    {
        term: "Find",
        definition: "Obtain an answer showing relevant stages in the working."
    }
];

// Card creation and functionality
function createCard(term, definition, category) {
    const card = document.createElement('div');
    card.className = `card ${category}`;
    card.tabIndex = 0;
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <h3>${term}</h3>
                <span class="flip-icon">🔄</span>
            </div>
            <div class="card-back">
                <p>${definition}</p>
                <span class="flip-icon">🔄</span>
            </div>
        </div>
    `;
    
    // Add click event for card flip
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Add keyboard support
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            card.classList.toggle('flipped');
        }
    });
    
    return card;
}

// Function to populate all cards
function populateCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    let delay = 0;
    const delayIncrement = 50;

    // Populate related concepts
    conceptsData.related.forEach(item => {
        const card = createCard(item.term, item.definition, 'related');
        card.style.animationDelay = `${delay}ms`;
        container.appendChild(card);
        delay += delayIncrement;
    });

    // Populate glossary terms
    conceptsData.glossary.forEach(item => {
        const card = createCard(item.term, item.definition, 'glossary');
        card.style.animationDelay = `${delay}ms`;
        container.appendChild(card);
        delay += delayIncrement;
    });

    // Populate command terms
    conceptsData.commands.forEach(item => {
        const card = createCard(item.term, item.definition, 'commands');
        card.style.animationDelay = `${delay}ms`;
        container.appendChild(card);
        delay += delayIncrement;
    });
}

// Function to filter cards
function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            card.classList.toggle('hidden', !card.classList.contains(category));
        }
    });
}

// Function to handle search
function searchCards(searchTerm) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const isMatch = text.includes(searchTerm.toLowerCase());
        card.classList.toggle('hidden', !isMatch);
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateCards();
    
    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search terms...';
    searchInput.className = 'search-input';
    document.querySelector('.filter-container').appendChild(searchInput);
    
    searchInput.addEventListener('input', (e) => {
        searchCards(e.target.value);
    });

    // Add filter button listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterCards(e.target.dataset.filter);
        });
    });
});

// Add escape key functionality
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.card.flipped').forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

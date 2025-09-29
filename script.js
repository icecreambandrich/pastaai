const pastaDetails = {
    "Pappardelle": {
        pronunciation: "(PAH-par-DEL-leh)",
        history: "Originated in Tuscany during the Renaissance, designed for robust sauces made with game and wild meats. Its broad ribbons became symbolic of hearty Tuscan feasts and remain central to the region’s cuisine.",
        pairing: "Ragùs, game meats, mushroom sauces",
        meaning: "Pappare, “to gobble up,” referencing how quickly it’s eaten.",
        region: "Tuscany"
    },
    "Bucatini": {
        pronunciation: "(boo-kah-TEE-nee)",
        history: "Traditional to Lazio and especially Rome, its hollow center was invented to hold sauce inside each strand. It gained enduring fame through bucatini all’amatriciana, a dish celebrated across Italy.",
        pairing: "Amatriciana (tomato, guanciale, pecorino)",
        meaning: "Buco, “hole,” describing the hollow core.",
        region: "Lazio"
    },
    "Penne": {
        pronunciation: "(PEN-neh)",
        history: "First patented in Liguria in 1865 when Giovanni Battista Capurro invented a diagonal-cutting pasta machine. Its clean edges made it versatile for both baked and sauced dishes, securing its global popularity.",
        pairing: "Arrabbiata, alla vodka, baked pasta dishes",
        meaning: "Pens or quills, referring to the slanted, pen-like ends.",
        region: "Liguria"
    },
    "Rigatoni": {
        pronunciation: "(ree-gah-TOH-nee)",
        history: "Common across central and southern Italy, designed with ridges to cling to chunky meat or vegetable sauces. It remains one of the signature pastas of Roman cooking.",
        pairing: "Meat ragùs, hearty tomato sauces",
        meaning: "Rigato, “ridged,” referring to its lined surface.",
        region: "Rome & southern Italy"
    },
    "Macaroni": {
        pronunciation: "(mack-ah-ROH-nee)",
        history: "Consumed in Italy since medieval times, where it was a broad term for many pasta shapes. It later became iconic abroad, especially in the U.S., through the creation of macaroni and cheese.",
        pairing: "Cheese sauces, baked casseroles",
        meaning: "Maccheroni, once a generic southern Italian word for pasta.",
        region: "Southern Italy"
    },
    "Fusilli": {
        pronunciation: "(foo-ZEE-lee)",
        history: "Originated in southern Italy, where cooks twisted dough around rods to form spirals by hand. Its spiral design made it ideal for holding sauces and later for cold pasta salads.",
        pairing: "Pesto, vegetable sauces, cold pasta salads",
        meaning: "Fuso, “spindle,” describing its twisted shape.",
        region: "Southern Italy"
    },
    "Cavatappi": {
        pronunciation: "(cah-vah-TAHP-pee)",
        history: "A modern invention from the 20th century, it quickly became popular in both Italian and American cooking. Its corkscrew shape holds creamy or baked sauces especially well.",
        pairing: "Cheese or cream sauces",
        meaning: "Corkscrews, describing its spiral twist.",
        region: "Modern (no single traditional region)"
    },
    "Farfalle": {
        pronunciation: "(far-FAH-leh)",
        history: "First crafted in Lombardy and Emilia-Romagna in the 16th century, its bow-tie shape made it a festive favorite. It became particularly common in creamy and light tomato dishes.",
        pairing: "Cream sauces, tomato sauces, pasta salads",
        meaning: "Butterflies, referring to its bow-tie appearance.",
        region: "Northern Italy (Lombardy, Emilia-Romagna)"
    },
    "Conchiglie": {
        pronunciation: "(kon-KEEL-yay)",
        history: "Developed in Campania, where shellfish and seafood dishes inspired its design. Its versatility across small, medium, and large sizes made it useful in soups, bakes, and stuffed recipes.",
        pairing: "Tomato sauces, meat or cheese fillings",
        meaning: "Shells, because of their seashell-like shape.",
        region: "Campania"
    },
    "Orecchiette": {
        pronunciation: "(oh-reck-KYET-teh)",
        history: "A rustic pasta from Puglia, handmade since the Middle Ages by pressing dough with a thumb. It became a symbol of the south and is often paired with local greens.",
        pairing: "Broccoli rabe, sausage, garlic, olive oil",
        meaning: "Little ears, because the discs resemble tiny ears.",
        region: "Puglia"
    },
    "Ravioli": {
        pronunciation: "(rah-vee-OH-lee)",
        history: "Documented as early as the 14th century, ravioli were eaten across northern and central Italy. They evolved with regional fillings, from ricotta to meat to vegetables.",
        pairing: "Butter and sage, tomato sauces",
        meaning: "Riavvolgere, “to wrap up,” describing its stuffed form.",
        region: "Liguria, Emilia-Romagna, Piedmont"
    },
    "Tortellini": {
        pronunciation: "(tor-tell-LEE-nee)",
        history: "Originating in Emilia-Romagna, tortellini were traditionally filled with meat and served in broth. Local legend says their shape was modeled on the navel of Venus.",
        pairing: "Broth, cream sauces",
        meaning: "Little cakes or twists, describing their stuffed, folded form.",
        region: "Emilia-Romagna"
    },
    "Lasagne Sheets": {
        pronunciation: "(lah-ZAHN-yeh)",
        history: "Among the earliest pastas, with origins traced to Ancient Rome’s laganon. In Emilia-Romagna, it evolved into layered baked dishes with ragù and béchamel.",
        pairing: "Ragù, béchamel, and parmesan in layered dishes",
        meaning: "Laganon, “flat dough sheets.”",
        region: "Emilia-Romagna"
    },
    "Cannelloni": {
        pronunciation: "(can-eh-LOH-nee)",
        history: "First created in Naples in the early 20th century, cannelloni were designed for filling with ricotta, spinach, or meat. They became an iconic baked pasta dish.",
        pairing: "Ricotta/spinach or meat fillings with tomato or béchamel",
        meaning: "Large reeds or big tubes, describing its cylindrical shape.",
        region: "Campania"
    },
    "Orzo": {
        pronunciation: "(OR-zo)",
        history: "Popular in both Italian and Greek cuisines, often used in soups and pilafs. Its rice-like size made it affordable and versatile in everyday cooking.",
        pairing: "Soups, risotto-style dishes, salads",
        meaning: "Barley, since it resembles a grain.",
        region: "Italy and Greece"
    },
    "Tagliatelle": {
        pronunciation: "(tahl-ya-TEL-leh)",
        history: "A specialty of Emilia-Romagna, where strips are cut from rolled dough. Legend says it was created in honor of Lucrezia Borgia’s hair at her wedding.",
        pairing: "Ragù alla Bolognese",
        meaning: "Tagliare, “to cut,” referring to hand-cut ribbons.",
        region: "Emilia-Romagna"
    },
    "Fettuccine": {
        pronunciation: "(fet-too-CHEE-neh)",
        history: "With origins in Rome and Tuscany, fettuccine are flatter ribbons than spaghetti. They achieved global fame through the creamy American-Italian dish Fettuccine Alfredo.",
        pairing: "Alfredo (butter, parmesan, cream)",
        meaning: "Little ribbons, describing its flat strips.",
        region: "Rome & Tuscany"
    },
    "Linguine": {
        pronunciation: "(lin-GWEE-neh)",
        history: "A Ligurian pasta, linguine was designed to pair with seafood and the region’s pesto. Its shape is flatter than spaghetti but narrower than fettuccine.",
        pairing: "Seafood sauces, especially clams",
        meaning: "Little tongues, referencing its flat, narrow form.",
        region: "Liguria"
    },
    "Spaghetti": {
        pronunciation: "(spa-GET-tee)",
        history: "From Naples, spaghetti rose to global fame in the 19th century when pasta production expanded. Today it is the world’s most recognized and consumed pasta.",
        pairing: "Tomato sauces, carbonara, aglio e olio",
        meaning: "Little strings, referring to its long, thin strands.",
        region: "Campania"
    }
};

const URL = './model/';

let model, webcam, labelContainer, maxPredictions;
let isScanning = false;
let lastPrediction = '';
let stablePredictionCounter = 0;
const requiredStableFrames = 20; // Number of consecutive frames to be sure (increased for accuracy)
const confidenceThreshold = 0.95; // Higher confidence threshold to reduce false positives
let currentFacingMode = 'environment'; // 'user' for front camera, 'environment' for back camera

const webcamButton = document.getElementById('webcam-button');
const uploadButton = document.getElementById('upload-button');
const resetButton = document.getElementById('reset-button');
const flipCameraButton = document.getElementById('flip-camera-button');
const fileUpload = document.getElementById('file-upload');
const imageContainer = document.getElementById('image-container');
const uploadedImage = document.getElementById('uploaded-image');
const webcamContainer = document.getElementById('webcam-container');

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    // load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = document.getElementById('label-container');
    labelContainer.innerHTML = 'Pasta radar online. Let\'s see what you\'ve got!';

    webcamButton.addEventListener('click', setupWebcam);
    uploadButton.addEventListener('click', () => fileUpload.click());
    resetButton.addEventListener('click', reset);
    flipCameraButton.addEventListener('click', flipCamera);
    fileUpload.addEventListener('change', handleFileUpload);
}

async function setupWebcam() {
    isScanning = true;
    
    // Create webcam with specific facing mode
    const flip = currentFacingMode === 'user'; // Flip for front camera
    webcam = new tmImage.Webcam(400, 400, flip, currentFacingMode);
    
    try {
        await webcam.setup({ facingMode: currentFacingMode });
        await webcam.play();
        window.requestAnimationFrame(loop);

        webcamContainer.innerHTML = '';
        webcamContainer.appendChild(webcam.canvas);
        webcamContainer.appendChild(flipCameraButton); // Re-add the flip button
        imageContainer.style.display = 'none';
        webcamContainer.style.display = 'block';
        labelContainer.innerHTML = 'Point the camera at some pasta!';
        document.getElementById('details-container').style.display = 'none';

        webcamButton.style.display = 'none';
        uploadButton.style.display = 'none';
        resetButton.style.display = 'inline-block';
        flipCameraButton.style.display = 'block';
    } catch (error) {
        console.error('Error setting up webcam:', error);
        labelContainer.innerHTML = 'Camera access denied or not available';
    }
}

async function flipCamera() {
    if (!webcam) return;
    
    // Stop current webcam
    await webcam.stop();
    
    // Switch facing mode
    currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    
    // Restart webcam with new facing mode
    await setupWebcam();
}

async function loop() {
    if (!isScanning) return;
    webcam.update(); // update the webcam frame
    await predict(webcam.canvas);
    window.requestAnimationFrame(loop);
}

async function handleFileUpload(event) {
    isScanning = false;
    stablePredictionCounter = 0;
    lastPrediction = '';
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
            webcamContainer.style.display = 'none';
            if (webcam) {
                await webcam.stop();
            }
            await predict(uploadedImage);
        };
        reader.readAsDataURL(file);
    }
}

// run the webcam image through the image model
async function predict(imageElement) {
    if (!model) return;
    const prediction = await model.predict(imageElement);
    let highestPrediction = { className: '', probability: 0 };
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability > highestPrediction.probability) {
            highestPrediction = prediction[i];
        }
    }

    // Stability check for webcam scanning
    if (isScanning) {
        if (highestPrediction.probability > confidenceThreshold && highestPrediction.className === lastPrediction) {
            stablePredictionCounter++;
        } else {
            stablePredictionCounter = 1;
            lastPrediction = highestPrediction.className;
        }

        if (stablePredictionCounter >= requiredStableFrames) {
            isScanning = false;
        }
    }

    const pastaName = highestPrediction.className;
    labelContainer.innerHTML = pastaName;

    const details = pastaDetails[pastaName];
    const detailsContainer = document.getElementById('details-container');

    if (details) {
        document.getElementById('pasta-pronunciation').innerHTML = `<em>${details.pronunciation}</em>`;
        document.getElementById('pasta-history').textContent = details.history;
        document.getElementById('pasta-pairing').textContent = details.pairing;
        document.getElementById('pasta-meaning').textContent = details.meaning;
        document.getElementById('pasta-region').textContent = details.region;
        detailsContainer.style.display = 'block';
    } else {
        detailsContainer.style.display = 'none';
    }
}

async function reset() {
    if (webcam) {
        await webcam.stop();
    }
    webcamButton.style.display = 'inline-block';
    uploadButton.style.display = 'inline-block';
    resetButton.style.display = 'none';
    flipCameraButton.style.display = 'none';
    webcamContainer.style.display = 'block';
    webcamContainer.innerHTML = '';
    imageContainer.style.display = 'none';
    labelContainer.innerHTML = 'Pasta radar online. Let\'s see what you\'ve got!';
    document.getElementById('details-container').style.display = 'none';
    isScanning = false;
    stablePredictionCounter = 0;
    lastPrediction = '';
}
// Initialize the application
init();

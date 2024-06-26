import pytesseract
from pytesseract import Output
from PIL import Image
import cv2
import os

# Configuration for Tesseract OCR
my_config = r"--psm 11 --oem 3"
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Path to your image file
image_path = "assets/nandos.webp"

# Open the image using PIL (Python Imaging Library)
image = Image.open(image_path)

# Read the image using OpenCV for further processing
img = cv2.imread(image_path)
height, width, _ = img.shape

# Perform OCR on the image and get the extracted data
data = pytesseract.image_to_data(img, config=my_config, output_type=Output.DICT)

# Number of text boxes detected
amount_boxes = len(data["text"])

# Prepare to save menu data to a text file
menu_text = ""

# Iterate through each detected text box
for i in range(amount_boxes):
    # Only consider text with confidence greater than 55 (adjust as needed)
    if float(data['conf'][i]) > 75:
        # Get bounding box coordinates and text
        (x, y, w, h) = (data['left'][i], data['top'][i], data['width'][i], data['height'][i])
        text = data['text'][i]

        # Append the text to the menu_text variable
        menu_text += f"{text}\n"

        # Draw bounding box and text on the image (optional)
        img = cv2.putText(img, text, (x, y + h + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2, cv2.LINE_AA)

# Create a directory for data if it doesn't exist
data_folder = "data"
os.makedirs(data_folder, exist_ok=True)

# Define the path to save the text file
output_file = os.path.join(data_folder, "nandos_menu.txt")

# Save the extracted menu text to the text file
with open(output_file, "w", encoding="utf-8") as file:
    file.write(menu_text)


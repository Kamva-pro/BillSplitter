import pytesseract
from pytesseract import Output
from PIL import Image
import cv2
import os

# Configuration for Tesseract OCR
my_config = r"--psm 11 --oem 3"
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

image_path = "assets/nandos.webp"

image = Image.open(image_path)

img = cv2.imread(image_path)
height, width, _ = img.shape

data = pytesseract.image_to_data(img, config=my_config, output_type=Output.DICT)

amount_boxes = len(data["text"])

menu_text = ""

for i in range(amount_boxes):
    if float(data['conf'][i]) > 70:
        (x, y, w, h) = (data['left'][i], data['top'][i], data['width'][i], data['height'][i])
        text = data['text'][i]

        menu_text += f"{text}\n"

        img = cv2.putText(img, text, (x, y + h + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2, cv2.LINE_AA)

data_folder = "data"
os.makedirs(data_folder, exist_ok=True)

output_file = os.path.join(data_folder, "nandos_menu.txt")

# Save the extracted menu text to the text file
with open(output_file, "w", encoding="utf-8") as file:
    file.write(menu_text)

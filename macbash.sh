MDRIVE = "/users/harfunmaterials/Google Drive"
GDRIVE = "/mnt/chromeos/GoogleDrive/MyDrive"
MROOT = "/users/harfunmaterials"
GROOT = "/home/kdog3682/CWF"

backup() {
    echo Backing up to Google Drive: $1
    cp $1 MDRIVE/$1
}

get() {
    echo Getting File from Google Drive
    cp MDRIVE/$1 MROOT/$1
}


print() {
  python3 MDRIVE/printscript.py $1
}

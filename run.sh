#pip3 install vosk
#git clone https://github.com/ideasman42/nerd-dictation.git
#cd nerd-dictation
#wget https://alphacephei.com/kaldi/models/vosk-model-small-en-us-0.15.zip
#unzip vosk-model-small-en-us-0.15.zip
#mv vosk-model-small-en-us-0.15 model


extension_id=mpiodijhokgodhhofbcjdecpffjipkle   # change this ID
curl -L -o "$extension_id.zip" "https://clients2.google.com/service/update2/crx?response=redirect&os=mac&arch=x86-64&nacl_arch=x86-64&prod=chromecrx&prodchannel=stable&prodversion=44.0.2403.130&x=id%3D$extension_id%26uc"
unzip -d "$extension_id-source" "$extension_id.zip"

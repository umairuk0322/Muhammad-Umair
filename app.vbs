' VBScript: Text-to-Speech with File Export and Timestamp

Option Explicit

Dim userInput, voice, fileStream, timestamp, filePath

' Prompt user for input
userInput = InputBox("Enter the text you want to convert to speech:", "Text to Speech")

' Handle empty input
If Trim(userInput) = "" Then
    MsgBox "No text entered. Exiting script.", vbExclamation, "No Input"
    WScript.Quit
End If

' Create SAPI voice object
Set voice = CreateObject("SAPI.SpVoice")

' Create FileStream object for saving audio
Set fileStream = CreateObject("SAPI.SpFileStream")

' Generate timestamp for unique filename
timestamp = Replace(Replace(Replace(Now, ":", "-"), "/", "-"), " ", "_")
filePath = CreateObject("Scripting.FileSystemObject").GetAbsolutePathName(".") & "\Speech_" & timestamp & ".wav"

' Open file stream for writing
fileStream.Open filePath, 3, False  ' 3 = SSFMCreateForWrite

' Set voice output to file stream
Set voice.AudioOutputStream = fileStream

' Speak the text
voice.Speak userInput

' Close the file stream
fileStream.Close

' Notify user
MsgBox "Speech saved to: " & filePath, vbInformation, "Export Successful"

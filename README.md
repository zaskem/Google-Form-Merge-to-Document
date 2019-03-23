# GoogleFormMergeToDocument
Example process for "merging" Google Form (response spreadsheet) data to a Google Doc (similar to Microsoft Office mail merge) in a Team Drive. Additionally, an email notification is sent to a recipient (with PDF attachment).
## Original Purpose
A process was developed by a non-technical, non-IT user, to improve a previously cumbersome and error-prone information transfer process. In particular:

_Paper Form → Handwriting → Scan to Email Recipient → Shred & Recycle_

As Google Docs do not natively support such functionality, the resulting process was developed to accommodate the process and eliminate the unneccessary paper trail.

## Key Technologies
* Google Team Drive
* Google Forms
* Google Sheets
* Google Docs
* Google Scripts
  * Triggers

## How to Use
The basic instructions included in `HowToSetupAndUse.md` should get you in business, assuming you've created an appropriate Google Form with an equivalently-structured response sheet (see structure details below).
  
## Considerations, Expectations, and Nuances
The use of Team Drives is assumed. While this code will work in an individual's personal Google Drive, none of the details in this repository address the nuances of sharing and permissions, which will have to be set up independently as your project demands.

This project is based on the circumstances and optimization of one specific workflow. As such, there are no built-in bits for extensibility (see future opportunities below). You should be able to successfully grab a copy, make it work, and modify as necessary to your specific operations.

### Example Form Response Sheet Structure
The Google Form you create will determine the modifications necessary for the processing script. The example provided is assuming a Form (and thus, Sheet) with the following fields/columns, in order:

* Timestamp
* Instructor Name
* Facilitator Name
* Course and Section Number (ex. Biol 1111-1)
* Date of session
* Objective
* Content
* Attendance
* Additional Notes

## Future Work/Opportunities
To enhance future scalability, a short list of possible modifications is presented. If you are interested in contributing or making an enhancement, feel free to fork this repository and submit a pull request for your modifications!

* Document structure enhancements (e.g. proper headers vs. text size/bold)
* Other document style enhancements
* More scalable document paragraph formatting (current version manually builds each paragraph)
* Other customizations (additional/dynamic email recipients, data validation, etc.)
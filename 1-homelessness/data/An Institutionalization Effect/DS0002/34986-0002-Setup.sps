*-------------------------------------------------------------------------*
*                                                                          
*                     SPSS SETUP FILE FOR ICPSR 34986
*           AN INSTITUTIONALIZATION EFFECT: THE IMPACT OF MENTAL
*        HOSPITALIZATION AND IMPRISONMENT ON HOMICIDE IN THE UNITED
*                           STATES, 1934 - 2001
*                      (DATASET 0002: NATIONAL DATA)
* 
*
*  SPSS setup sections are provided for the ASCII version of this data
*  collection.  These sections are listed below:
*
*  DATA LIST:  assigns the name, type, decimal specification (if any),
*  and specifies the beginning and ending column locations for each
*  variable in the data file. Users must replace the "data-filename"
*  in the DATA LIST statement with a filename specifying the directory
*  on the user's computer system in which the downloaded and unzipped
*  data file is physically located (e.g., "c:\temp\34986-0002-data.txt").
*
*  VARIABLE LABELS:  assigns descriptive labels to all variables.
*  Labels and variable names may be identical for some data files.
*
*  MISSING VALUES: declares user-defined missing values. Not all
*  variables in this data set necessarily have user-defined missing
*  values. These values can be treated specially in data transformations,
*  statistical calculations, and case selection.
*
*  VALUE LABELS: assigns descriptive labels to codes found in the data
*  file.  Not all codes necessarily have assigned value labels.
*
*  VARIABLE LEVEL: assigns measurement level to each variable (scale,
*  nominal, or ordinal).
*
*  NOTE:  Users should modify this setup file to suit their specific
*  needs. The MISSING VALUES section has been commented out (i.e., '*').
*  To include the MISSING VALUES section in the final SPSS setup, remove
*  the comment indicators from the desired section.
*
*  CREATING A PERMANENT SPSS DATA FILE: If users wish to create and save
*  an SPSS data file for further analysis using SPSS for Windows, the
*  necessary "SAVE OUTFILE" command is provided in the last line of
*  this file.  To activate the command, users must delete the leading
*  asterisk (*) and replace "spss-filename" with a filename specifying
*  the location on the user's computer system to which the new data file
*  will be saved (e.g., SAVE OUTFILE="c:\spsswin\data\da34986-0002.sav").
*
*-------------------------------------------------------------------------.

* SPSS FILE HANDLE AND DATA LIST COMMANDS.

FILE HANDLE DATA / NAME="data-filename" LRECL=123.
DATA LIST FILE=DATA /
                YEAR 1-4           ADULTPOP 5-10
     PRISONPOP 11-25 (7)      SJAILPOP 26-39 (7)      ALLRESMH 40-48 (2)
 HOMICIDERATE 49-63 (12) YOUTHPOPRATE 64-78 (12) UNEMPLOYRATE 79-93 (12)
 POVERTYRATE 94-108 (12) PRISONRATE 109-123 (11)
   .

* SPSS VARIABLE LABELS COMMAND

VARIABLE LABELS
   YEAR      'Year' /
   ADULTPOP  'Adult Population' /
   PRISONPOP 'Prison Population' /
   SJAILPOP  'Jail Population' /
   ALLRESMH  'Mental Hospital Population' /
   HOMICIDERATE 'Homicide Rate' /
   YOUTHPOPRATE 'Youth Rate' /
   UNEMPLOYRATE 'Unemployment Rate' /
   POVERTYRATE 'Poverty Rate' /
   PRISONRATE 'Prison Rate' /
   .

EXECUTE.

* SPSS VARIABLE LEVEL COMMAND.

VARIABLE LEVEL
   year
   adultpop
   prisonpop
   sjailpop
   allresMH
   homiciderate
   youthpoprate
   unemployrate
   povertyrate
   prisonrate
    (scale).

* Create SPSS system file.

*SAVE OUTFILE="spss-filename.sav".

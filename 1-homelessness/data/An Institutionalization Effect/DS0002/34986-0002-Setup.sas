/*-------------------------------------------------------------------------
 |                                                                         
 |                    SAS SETUP FILE FOR ICPSR 34986
 |          AN INSTITUTIONALIZATION EFFECT: THE IMPACT OF MENTAL
 |       HOSPITALIZATION AND IMPRISONMENT ON HOMICIDE IN THE UNITED
 |                          STATES, 1934 - 2001
 |                     (DATASET 0002: NATIONAL DATA)
 |
 |
 | SAS setup sections are provided for the ASCII version of this data
 | collection.  These sections are listed below:
 |
 | PROC FORMAT:  creates user-defined formats for the variables. Formats
 | replace original value codes with value code descriptions. Only
 | variables with user-defined formats are included in this section.
 |
 | DATA:  begins a SAS data step and names an output SAS data set.
 |
 | INFILE:  identifies the input file to be read with the input statement.
 | Users must replace the "data-filename" with a filename specifying the
 | directory on the user's computer system in which the downloaded and
 | unzipped data file is physically located (e.g.,
 | "c:\temp\34986-0002-data.txt").
 |
 | INPUT:  assigns the name, type, decimal specification (if any), and
 | specifies the beginning and ending column locations for each variable
 | in the data file.
 |
 | LABEL:  assigns descriptive labels to all variables. Variable labels
 | and variable names may be identical for some variables.
 |
 | MISSING VALUE RECODES:  sets user-defined numeric missing values to
 | missing as interpreted by the SAS system. Only variables with
 | user-defined missing values are included in this section.
 |
 | If any variables have more than one missing value, they are assigned
 | to the standard missing value of a single period (.) in the statement
 | below. To maintain the original meaning of missing codes, users may want
 | to take advantage of the SAS missing values (the letters A-Z or an
 | underscore preceded by a period).
 |
 | An example of a standard missing value recode:
 |
 |   IF (RELATION = 98 OR RELATION = 99) THEN RELATION = .; 
 |
 | The same example using special missing value recodes:
 |
 |    IF RELATION = 98 THEN RELATION = .A;
 |    IF RELATION = 99 THEN RELATION = .B;
 |
 | FORMAT:  associates the formats created by the PROC FORMAT step with
 | the variables named in the INPUT statement.
 |
 | NOTE:  Users should modify this setup file to suit their specific needs.
 | Sections for PROC FORMAT, FORMAT, and MISSING VALUE RECODES have been
 | commented out (i.e., '/*'). To include these sections in the final SAS
 | setup, users should remove the SAS comment indicators from the desired
 | section(s).
 |
 |------------------------------------------------------------------------*/


* SAS DATA, INFILE, INPUT STATEMENTS;

DATA;
INFILE "data-filename" LRECL=123;
INPUT
       YEAR 1-4                ADULTPOP 5-10
        PRISONPOP 11-25 .7      SJAILPOP 26-39 .7       ALLRESMH 40-48 .2
        HOMICIDERATE 49-63 .12  YOUTHPOPRATE 64-78 .12  UNEMPLOYRATE 79-93 .12
        POVERTYRATE 94-108 .12  PRISONRATE 109-123 .11  ;


* SAS LABEL STATEMENT;

LABEL 
   YEAR    = 'Year' 
   ADULTPOP= 'Adult Population' 
   PRISONPOP= 'Prison Population' 
   SJAILPOP= 'Jail Population' 
   ALLRESMH= 'Mental Hospital Population' 
   HOMICIDERATE= 'Homicide Rate' 
   YOUTHPOPRATE= 'Youth Rate' 
   UNEMPLOYRATE= 'Unemployment Rate' 
   POVERTYRATE= 'Poverty Rate' 
   PRISONRATE= 'Prison Rate' 
        ; 

RUN ;

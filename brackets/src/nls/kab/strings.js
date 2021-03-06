/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(tuccḍa {0})",
    "NOT_FOUND_ERR": "Afaylu /directory ulac-it.",
    "NOT_READABLE_ERR": "Afaylu /directory ur yezmir ara ad ittuɣaṛ.",
    "EXCEEDS_MAX_FILE_SIZE": "Ifuyla ugar n {0} MAṬ ur zmiren ara ad ttwaldin di {APP_NAME}.",
    "FILE_EXISTS_ERR": "Afaylu neɣ akaram yella yakan.",
    "FILE": "afaylu",
    "FILE_TITLE": "Afaylu",
    "DIRECTORY": "akaram",
    "DIRECTORY_TITLE": "Akaram",
    "DIRECTORY_NAMES_LEDE": "Ismawen n ikaramen",
    "FILENAMES_LEDE": "Ismawen n ufaylu",
    "FILENAME": "Isem n ufaylu",
    "DIRECTORY_NAME": "Isem n ukaram",
    "OPEN_DIALOG_ERROR": "Teḍra-d teccḍa deg uskan n udiwenni n tulya n ufaylu. (tuccḍa {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Teḍra-d tuccḍa di tɣuṛi n ugbur n ukaram <span class='dialog-filename'>{0}</span>. (tuccḍa{1})",
    "ERROR_OPENING_FILE_TITLE": "Tuccḍa di tulya n ufaylu",
    "ERROR_OPENING_FILE": "Teḍra-d tuccḍa deg uɛraḍ n tulya n ufaylu <span class='dialog-filename'> {0} </span> . {1}",
    "ERROR_OPENING_FILES": "Teḍra-d tuccḍa deg uɛraḍ n tulya n ifuyla agi:",
    "ERROR_SAVING_FILE_TITLE": "Tuccḍa deg usekles n ufaylu",
    "ERROR_SAVING_FILE": "Teḍra-d tuccḍa deg uɛraḍ n usekles n ufaylu <span class='dialog-filename'> {0} </span> . {1}",
    "ERROR_RENAMING_FILE_TITLE": "Tuccḍa di usnifel n yisem n ufaylu",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Tuccḍa di usnifel n yisem n ukaram",
    "ERROR_RENAMING_FILE": "Teḍra-d tuccḍa deg uɛraḍ n usnifel n yisem n ufaylu <span class='dialog-filename'> {0} </span> . {1}",
    "ERROR_RENAMING_DIRECTORY": "Teḍra-d tuccḍa deg uɛraḍ n usnifel n yisem n ukaram <span class='dialog-filename'> {0} </span> . {1}",
    "ERROR_DELETING_FILE_TITLE": "Tuccḍa di tikksa n ufaylu",
    "ERROR_DELETING_DIRECTORY_TITLE": "Tuccḍa di tukksa n ukaram",
    "ERROR_DELETING_FILE": "Teḍra-d tuccḍa deg uɛraḍ n tukksa n ufaylu <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Teḍra-d tuccḍa deg uɛraḍ n tukksa n ukaram <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Isem n ufaylu mačči d ameɣtu",
    "INVALID_DIRNAME_TITLE": "Isem n ukaram mačči d ameɣtu",
    "INVALID_FILENAME_MESSAGE": "Ismawen n ifuyla ur zmiren ar ad sqedcen awalen n unagraw yettuḥeṛṛen, neɣ ad faken s tnneqiṭ (.) neɣ ad sqedcen isekkilen agi: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Ismawen n ikaramen ur zmiren ar ad sqedcen awalen n unagraw yettuḥeṛṛen, neɣ ad faken s tnneqiṭ (.) neɣ ad sqedcen isekkilen agi: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Afaylu neɣ akaram s yisem <span class='dialog-filename'>{0}</span> yella yalkan.",
    "ERROR_CREATING_FILE_TITLE": "Tuccḍa deg tmerna n ufaylu",
    "ERROR_CREATING_DIRECTORY_TITLE": "Tuccḍa n tmerna n ukaram",
    "ERROR_CREATING_FILE": "Teḍra-d tuccḍa deg uɛraḍ n tmerna n ufaylu <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Teḍra-d tuccḍa deg uɛraḍ n tmerna n ukaram <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "",
    "EXT_MODIFIED_TITLE": "Isnifal izɣarayen",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> yesniifel-it ɣef udebṣi usnas nniḍen. Mačči d {APP_NAME} i t-yesniflen.<br /><br />Tebɣiḍ ad tesekkelseḍ afaylu udiɣ ad tesbeɛjeḍ isnifal agi?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> yesniifel-it ɣef udebṣi usnas nniḍen. Mačči d {APP_NAME} i t-yesniflen. acukan llan isnifal ur yeklisen ara di {APP_NAME}. <br /><br />Anwa lqem i tebɣiḍ ad teǧǧeḍ?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> yekkes-it seg udebṣi usnas nniḍen. Mačči d {APP_NAME} i t-yesniflen. acukan llan isnifal ur yeklisen ara di {APP_NAME}. <br /><br />Anwa lqem i tebɣiḍ ad teǧǧeḍ?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Sentem tukksa",
    "CONFIRM_FOLDER_DELETE": "Tebɣiḍ ad tekkseḍ akaram <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Afaylu yettwakkes",
    "DONE": "Immed",
    "OK": "IH",
    "CANCEL": "Sefsex",
    "SAVE_AND_OVERWRITE": "Sfeɛj",
    "DELETE": "Kkes",
    "BUTTON_YES": "Ih",
    "BUTTON_NO": "Ala",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Ulac anegzum n tezrigt deg adig amiran n teḥnaccaṭ",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Anegzum n teẓrigt CSS : sers taḥnaccaṭ ɣef yisem n tneɣrit",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Anegzum n teẓrigt CSS : imyerr n tneɣrit ur yemmid ara",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Anegzum n teẓrigt CSS : asulay n imyerr n tneɣrit ur yemmid ara",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Anegzum n teẓrigt CSS : sers taḥnaccaṭ ɣef tṛekkizt, taneɣrit neɣ asulay",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Anegrum n teẓrigt n twuri takudant CSS : taseddast mačči tameɣtut",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Anegzum n teẓrigt JS : sers taḥnaccat ɣef yisem n twuri",
    "BUTTON_NEW_RULE": "Alugen amaynut",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Ulac tasemlit i wadig amiran n teḥnaccaṭ",
    "CMD_FILE_NEW": "Afaylu amaynut",
    "CMD_FILE_NEW_FOLDER": "Akaram amaynut",
    "CMD_FILE_RENAME": "Snifel isem",
    "CMD_FILE_DELETE": "Kkes",
    "CMD_FILE_DOWNLOAD": "Sider",
    "CMD_CUT": "Gzem",
    "CMD_COPY": "Nɣel",
    "CMD_PASTE": "Senteḍ",
    "CMD_SELECT_ALL": "Ffren imaṛṛa",
    "CMD_TOGGLE_QUICK_EDIT": "Taẓrigt tuzribt",
    "CMD_TOGGLE_QUICK_DOCS": "Tasemlit",
    "DND_MAX_SIZE_EXCEEDED": "afaylu iɛedda teɣzi tafellayt yettwasefraken: {0} MAṬ.",
    "DND_UNSUPPORTED_FILE_TYPE": "anaw n ufaylu ur yettusefrak ara",
    "DND_ERROR_UNZIP": "ur izmir ara ad isefruri afaylu",
    "DND_ERROR_UNTAR": "ur izmir ara ad isefruri afaylu n umasal tar",
    "DND_SUCCESS_UNZIP_TITLE": "Asefruri yemmed akken iwata",
    "DND_SUCCESS_UNTAR_TITLE": "Asefruri n umasal tar yemmed akken iwata",
    "DND_SUCCESS_UNZIP": "Asefruri n <b>{0}</b> yedda.",
    "DND_SUCCESS_UNTAR": "Asefruri n umasal tar <b>{0}</b> yedda.",
    "IMAGE_DIMENSIONS": "{0} (tahri) &times; {1} (tuγzi) ipiksilen",
    "IMAGE_FILTERS_TITLE": "Imsizdig n tugniwin",
    "IMAGE_FILTER_SEPIA": "Sipya",
    "IMAGE_SAVE_WITH_FILTERS": "Snes",
    "IMAGE_RESET_FILTERS": "Sefsex",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Ini amiran",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Ini aneẓli",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "Amasal RGBa",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Amasal asedamrawan",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "Amasal HSLa",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Ittuseqdec {1} n tikal)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Ittuseqdec {1} n tikal)",
    "CMD_JUMPTO_DEFINITION": "Ddu ɣer tbadut",
    "CMD_SHOW_PARAMETER_HINT": "Sken isumar n iɣewwaṛen",
    "NO_ARGUMENTS": "<ulac aɣewwar>",
    "DETECTED_EXCLUSION_TITLE": "Ugur deg ufaylu JavaScript",
    "CMD_ENABLE_QUICK_VIEW": "Taskant tuzribt ticki yekka-d nnig",
    "DOCS_MORE_LINK": "Ɣeṛ ugar",
    "UPLOAD_FILES_DIALOG_HEADER": "Sali ifuyla",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "…neɣ sers ifuyla dagi.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "IH. bru ifuyla!",
    "UPLOADING_INDICATOR": "Asali...",
    "BUTTON_FROM_YOUR_COMPUTER": "Seg uselkim inek...",
    "TAKE_A_SELFIE": "Ṭṭef tawlaft i yiman-ik...",
    "CMD_MOVE_FILE": "Ddiu ɣer...",
    "PROJECT_ROOT": "Aẓaṛ n usenfaṛ",
    "PICK_A_FOLDER_TO_MOVE_TO": "Fren akaram",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Tuccḍa deg usenkez",
    "UNEXPECTED_ERROR_MOVING_FILE": "Teḍra-d tuccḍa deg usenkez n {0} ɣer {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Afaylu s yisem {0} yella yakan di {1}. Ma ulac aɣilif snifel isem n yiwen seg-sen akken ad tkemleḍ."
});

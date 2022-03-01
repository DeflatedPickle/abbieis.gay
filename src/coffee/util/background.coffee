import { images } from "../../js/images.js"

img = _.sample(images)

$("#back").css(
    "background",
    "url('#{img}')"
)
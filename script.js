function addSubject() {
    var subject = document.sample.subject.value;
    var marks = document.sample.marks.value;
    var marksObtained = document.sample.marksObtained.value;
    var percentage = document.sample.percentage.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = subject;
    td2.innerHTML = marks;
    td3.innerHTML = marksObtained;
    td4.innerHTML = percentage;


    document.getElementById("tb1").appendChild(tr);
}

const slides = document.querySelectorAll(".slide")
var counter = 0;

/*slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)*/
console.log(slides)
const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


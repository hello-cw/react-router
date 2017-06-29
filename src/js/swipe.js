export default class Swipe {
	constructor(container, options) {
		const defaultOptions = {
			index: 0, // index position
			continuous: true, // infinite slide -- true: infinite, false: finite
			dots: true, // pagination dots -- true: create, false: not create
			duration: 300, // transition duration
			interval: 3500, // integer -- 0: not auto slide, positive number: interval of auto slide
			callback(index) {} // callback function after slide successfullly
		}
		Object.assign(this, defaultOptions, options)

		this.container = container

		this.timer = null
	}

	init() {
		this.setup()

		if (this.interval) {
			this.begin()
		}

		// add event listener
		this.element.addEventListener('touchstart', this.onTouchStart, false)
		window.addEventListener('resize', this.setPosition, false)
	}

	circle(index) {
		const len = this.slides.length
		return (len + (index % len)) % len
	}

	move(index, dist, duration) {
		this.translate(index, dist, duration)
		this.slidePos[index] = dist
	}

	translate(index, dist, duration) {
		const slide = this.slides[index]
		if (!slide) return false

		const style = slide.style
		style.transitionDuration = duration + 'ms'
		style.transform = `translate3d(${dist}px, 0, 0)`
	}

	setup() {
		const container = this.container
		const element = this.element = container.children[0]
		const index = this.index

		let continuous = this.continuous

		let slides = element.children
		let len = this.actualLen = slides.length

		// set continuous to false if only one slide
		if (len < 2) {
			continuous = this.continuous = false
		}

		//special case if two slides
		if (continuous && len === 2) {
			element.appendChild(slides[0].cloneNode(true))
			element.appendChild(slides[1].cloneNode(true))
			slides = element.children
			len = slides.len
		}

		this.slides = slides

		// create an array to store current positions of each slide
		this.slidePos = new Array(len)

		this.setPosition()

		if (this.dots) {
			this.createDots()
		}
	}

	createDots() {
		const ul = this.ul = document.createElement('ul')
		let html = ''
		const len = this.actualLen
		for (let i = 0; i < len; i++) {
			let cls = ''
			if (i === this.index) {
				cls = 'active'
			}
			html += `<li class="dot ${cls}"></li>`
		}
		ul.innerHTML = html

		this.container.appendChild(ul)
	}

	updateDots() {
		const dots = this.ul.children
		const len = dots.length

		let i = len

		while (i--) {
			if (dots[i].classList.contains('active')) {
				dots[i].classList.remove('active')
				break;
			}
		}

		dots[ this.index % len ].classList.add('active')
	}


	afterSlide(isvalid) {
		// valid slide, call callback func
		if (isvalid) {
			if (this.dots) {
				this.updateDots()
			}
			this.callback && this.callback(this.index)
		}
		// if auto slide, set timeout
		if (this.interval) {
			this.begin()
		}
	}

	slide(to, duration = this.duration) {
		const { index, container, continuous, slidePos, width } = this

		if (index === to) return false

		this.stop()

		// 1: backward, -1: forward
		let direction = Math.abs(index - to) / (index -to)

		if (continuous) {
			const natural_direction = direction
			direction = -slidePos[this.circle(to)] / width

			// if going forward but to < index, use to = slides.length + to
			// if going backward but to > index, use to = -slides.length + to
			if (direction !== natural_direction) {
				to = -direction * slidePos.length + to
			}
		}

		let diff = Math.abs(index - to) - 1

		// move all the slides between index and to in the right direction
		while (diff--) {
			this.move(this.circle((to > index ? to : index) - diff - 1), width * direction, 0)
		}

		to = this.circle(to)

		this.move(index, width * direction, duration);
		this.move(to, 0, duration);
		
		if (this.continuous) {
			this.move(this.circle(to - direction), -(width * direction), 0)
		}

		this.index = to

		this.afterSlide(true)
	}

	begin() {
		this.timer = setTimeout(() => {
			this.next()
		}, this.interval)
	}

	stop() {
		clearTimeout(this.timer)
		this.timer = null
	}

	prev() {
		if (this.continuous || !!this.index) {
			this.slide(this.index - 1)
		}
	}

	next() {
		if (this.continuous || (this.index < this.slides.length - 1)) {
			this.slide(this.index + 1)
		}
	}

	setPosition (){
		const { continuous, container, slides, index } = this

		let len = slides.length

		const width = this.width = container.offsetWidth || container.getBoundingClientRect().width

		while (len--) {
			const slide = slides[len]

			this.move(len, index > len ? -width : (index < len ? width : 0), 0)
		}

		// reposition elements before and after index
		if (continuous) {
			this.move(this.circle(index - 1), -width, 0)
			this.move(this.circle(index + 1), width, 0)
		}
	};

	onTouchStart = (event) => {
		const touches = event.touches[0]

		this.start = {
			x: touches.pageX,
			y: touches.pageY,
			time: +new Date()
		}

		document.addEventListener('touchmove', this.onTouchMove, false)
		document.addEventListener('touchend', this.onTouchEnd, false)
	};

	onTouchMove = (event) => {
		if (event.touches.length > 1 || event.scale && event.scale !== 1) return false

		this.stop()

		const touches = event.touches[0]


		const delta = this.delta = {
			x: touches.pageX - this.start.x,
			y: touches.pageY - this.start.y
		}

		const { index, slides, container, continuous } = this

		const width = container.offsetWidth || container.getBoundingClientRect().width

		if (continuous) {
			this.translate(this.circle(index - 1), delta.x - width, 0)
			this.translate(index, delta.x, 0)
			this.translate(this.circle(index + 1), delta.x + width, 0)

		// increase resistance if first or last slide
		} else {
			delta.x = delta.x / (
					( (!index && delta.x > 0) || (index === slides.length - 1 && delta.x < 0) )
					? ( Math.abs(delta.x) / width + 1) // determine resistance level
					: 1 // no resistance if false
				)

			this.translate(index - 1, delta.x - width, 0)
			this.translate(index, delta.x, 0)
			this.translate(index + 1, delta.x + width, 0)
		}
	};

	onTouchEnd = (event) => {
		const { start, index, delta, slides, duration, continuous, container } = this

		const time = +new Date() - start.time

		const width = container.offsetWidth || container.getBoundingClientRect().width

		const isValidSlide = (Number(time) < 250 && Math.abs(delta.x) > 20) || Math.abs(delta.x) > (width / 2)

		// determine if slide attempt is past start and end
		let isPastBounds = (!index && delta.x > 0) || (index === slides.length - 1 && delta.x < 0)

		if (continuous) {
			isPastBounds = false
		}

		// true: right -> left, false: left -> right
		const direction = delta.x < 0

		// valid slide
		if (isValidSlide && !isPastBounds) {
			// left <- right
			if (direction) {
				if (continuous) {
					this.move(this.circle(index - 1), -width, 0)
					this.move(this.circle(index + 2), width, 0)
				} else {
					this.move(index - 1, -width, 0)
				}
				this.move(index, -width, duration)
				this.move(this.circle(index + 1), 0, duration)

				this.index = this.circle(index + 1)

			// left -> right
			} else {
				if (continuous) {
					this.move(this.circle(index + 1), width, 0)
					this.move(this.circle(index + 2), -width, 0)
				} else {
					this.move(index + 1, width, 0)
				}
				this.move(index, width, duration)
				this.move(this.circle(index - 1), 0, duration)
			
				this.index = this.circle(index - 1)
			}

		// invalid slide
		} else {
			if (continuous) {
				this.move(this.circle(index - 1), -width, duration)
				this.move(index, 0, duration)
				this.move(this.circle(index + 1), width, duration)
			} else {
				this.move(index - 1, -width, duration)
				this.move(index, 0, duration)
				this.move(index + 1, width, duration)
			}
		}

		document.removeEventListener('touchmove', this.onTouchMove, false)
		document.removeEventListener('touchend', this.onTouchEnd, false)

		this.afterSlide(isValidSlide)
	};

	destroy() {
		this.stop()
		this.element.removeEventListener('touchstart', this.onTouchStart, false)
		window.removeEventListener('resize', this.setPosition, false)
	}
}
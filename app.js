Vue.createApp({
  data() {
    return {
      questionIndex: 0,
      selectedAnswer: '',
      correctCounter: 0,
      incorrectCounter: 0,
      questions: [
        {
          question: 'Что из нижеперечисленного, на ваш взгляд, является инвестициями?',
          answers: [
            'Покупка мебели и бытовой техники в собственную квартиру',
            'Покупка дорогого автомобиля для личного пользования',
            'Покупка акций и облигаций на бирже',
          ],
          correctAnswer: 3,
        },
        {
          question: 'Какое объяснение лучше всего подходит для выражения «финансовая свобода»?',
          answers: [
            'Когда выплатил ипотеку и почувствовал себя свободным человеком',
            'Когда хватает на все постоянные расходы и можно дальше работать в свое удовольствие',
            'Когда перестал работать на дядю, стал предпринимателем и теперь зависишь только от результатов собственного труда',
          ],
          correctAnswer: 2,
        },
        {
          question: 'Что в теории финансового планирования означает принцип «Заплати сначала себе»?',
          answers: [
            'В день зарплаты надо сразу перечислить часть денег на накопительный счет, а затем жить на оставшиеся средства',
            'Сначала потратить деньги на удовольствия, а затем - на необходимые, но не такие приятные вещи',
            'Когда предприниматель каждый месяц вынимает часть денег из оборота компании, чтобы наслаждаться жизнью',
            'Вложение средств в первую очередь в себя: в обучение, саморазвити',
          ],
          correctAnswer: 1,
        },
      ],
    };
  },
  methods: {
    onAnswerClick(evt) {
      this.selectedAnswer = parseInt(evt.target.dataset.value, 10) + 1;

      if (this.selectedAnswer === this.questions[this.questionIndex].correctAnswer) {
        this.correctCounter++
      } else {
        this.incorrectCounter++
      }
    },
    onNextClick() {
      this.questionIndex++;
      this.selectedAnswer = '';
    },
    onShowResultsClick() {
      this.questionIndex++;
    },
    onAgainClick() {
      this.questionIndex = 0;
      this.selectedAnswer = '';
      this.correctCounter = 0;
      this.incorrectCounter = 0;
    }
  },
}).mount('#app');
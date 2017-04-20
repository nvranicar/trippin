export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('user-profile'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('user-profile.index'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}

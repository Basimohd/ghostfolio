import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gf-membership-card',
  styleUrls: ['./membership-card.component.scss'],
  templateUrl: './membership-card.component.html'
})
export class MembershipCardComponent {
  @Input() public expiresAt: Date;
  @Input() public name: string;
}

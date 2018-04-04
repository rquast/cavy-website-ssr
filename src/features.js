import {inject} from 'aurelia-framework';
import {Resize} from 'resize';

@inject(Resize)
export class Features {

  activeImage = false;

  chat_pictures = [
    'chat_typing_activity',
    'chat_emojis',
    'chat_location',
    'availability_online_status'
  ];

  sso_pictures = [
    'sso_signin',
    'sso_microsoft'
  ];

  change_alerts_pictures = [
    'change_alerts_subscribe',
    'change_alerts_subscribed',
    'change_alerts_subscribed_users',
    'change_alerts_manage_subscription',
    'change_alerts_add',
    'change_alerts_view'
  ];

  issues_pictures = [
    'issues_view',
    'issues_create'
  ];

  sticky_topics_pictures = [
    'sticky_topics',
    'sticky_topics_move',
    'sticky_topics_pin'
  ];

  availability_pictures = [
    'availability_chat',
    'availability_set_recurring',
    'availability_set_week',
    'availability_set_week_limited'
  ];

  image_editing_pictures = [
    'image_crop',
    'image_annotate',
    'wiki_embed_image'
  ];

  file_transfer_pictures = [
    'send_files_uploading',
    'send_files_uploaded'
  ];

  wiki_pictures = [
    'wiki_view',
    'search_results',
    'wiki_edit_formatting',
    'wiki_embed_source_code',
    'wiki_embed_video',
    'wiki_embed_image_options',
  ];

  widget_pictures = [
    'widget_tooltip'
  ];

  constructor(resize) {
    this.resize = resize;
  }

  activate() {
    this.scrollToTop();
  }

  attached() {
    this.scrollToTop();
  }

  scrollToTop() {
    if (typeof window !== 'undefined' && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }

  showImagePreview = (item) => {
    this.activeImage = item;
  };

  hideImagePreview = () => {
    this.activeImage = false;
  };

}
